const css = require('css')
const fs = require('fs')
const match = require('./match')
let htmlStr = `<html>
    <head>
      <style>
        body div #myid {
          width: 100px;
          background-color: #fff;
        }
        .text {
          color: #888;
        }
        span {
          font-size: 12px;
        }
      </style>
    </head>
    <body>
        <div id="myid" class="box">
          <span class="text"></span>
        </div>
    </body>
  </html>
`

//  body div #myid： 从后往前
// #myid 有没有 两个父级 一个叫 div 一个 body
let rules = []
function addCSSrule(text) {
  let ast = css.parse(text);
  rules.push(...ast.stylesheet.rules);
}
function computerCss(element) {
  if (!element.computerStyle) {
    element.computerStyle = {}
  }
  // 栈内元素 就是 element 父级
  let elments = stack.slice(0).reverse();
  for (let rule of rules) {
    // if (!rule) return;
    // 从后往前
    // console.log(rule.selectors[0]);
    let selectorParts = rule.selectors[0].split(' ').reverse();
    if (!match(element, selectorParts[0])) {
      continue;
    }
    // selectorParts:  #myid div body
    //                 [p1, p2, p3, p4]
    // element 的 父级
    let j = 1;
    for (let i = 0; i < elments.length; i ++) {
      if (match(elments[i], selectorParts[j])) {
        j ++;
      }
    }
    // 所有的选择器遍历 OK
    if (j >= selectorParts.length) {
      // 
      /**
       * "width": {
            "value": "100px"
          },
          "background-color": {
             "value": "#fff"
          }
       */
      let computerStyle = element.computerStyle;
      for (let declaration of rule.declarations) {
        let {property, value} = declaration;
        if (!computerStyle[property]) {
          computerStyle[property] = {};
        }
        computerStyle[property].value = value;
      }
    }
  }
}


// 词法分析， 分词
// {type: element, tagName:'html',tag: 'startTag'}
// {type: element, tagName:'html',tag: 'endTag'}
// 语法分析，  html配对  js编程语言(LL,LR)
// 栈来完成
// startTag push
// end [length-1]  栈顶元素和自己标签名一样  配对 ？ pop
let currentToken = null
let currentTextNode = null
let currentAttribute = null
let stack = [
  {type: 'document', children: []},
]
function parse(string) {
  let state = start;
  for (let c of string) {
    state = state(c)
  }
}
parse(htmlStr)
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    //
    emit({
      type: 'text',
      content: c
    })
    return start
  }
}
function tagOpen(c) {
  if (c === '/') {
    // 必然结束标签
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    // 去拼接
    // 必然是开始标签
    currentToken = {
      type: 'element',
      tag: 'startTag',
      attribute: [],
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c
    // 
    return tagName
    // 什么时候拼接完？？
  } else if (c === '>') {
    // 提交 当前token
    emit(currentToken)
    return start
  } else if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribute
  }
}
function beforeAttribute(c) {
  if (c.match(/^[\n\f\t ]$/)) {
    return beforeAttribute
  } else if (c.match(/^[a-zA-Z]$/)){
    currentAttribute = {
      name: c,
      value: ''
    }
    return attributeName
  } 
  // >  回到tagname
  return tagName(c)
}
function attributeName(c) {
  if (c.match(/^[a-zA-Z]$/)){
    currentAttribute.name += c
    return attributeName
  } else if (c === '=') {
    return attributeValue
  }
}
function attributeValue(c) {
  if (c === '\"' || c === '\"') {
    // ""
    return attributeValue
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentAttribute.value += c
    return attributeValue
  } else {
    // c  丢了
    // console.log(c, '+++')
    currentToken.attribute.push(currentAttribute)
    currentAttribute = null
    // 空格 回到tagname
    return tagName(c)
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'element',
      tag: 'endTag',
      tagName: c
    }
    // 也要拼接
    return tagName
  }
}

// console.log(JSON.stringify(stack, null, 2))
fs.writeFileSync('./dom.json', )
function emit(token) {
  let top = stack[stack.length - 1]
  if (token.tag === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attribute: token.attribute,
      tagName: token.tagName,
    }
    // 得到一个element 该element  css计算
    computerCss(element)
    currentTextNode = null
    // 处理子元素
    top.children.push(element)
    stack.push(element)
  } else if (token.tag === 'endTag') {
    if (top.tagName === token.tagName) {
      stack.pop()
      currentTextNode = null
      if (top.tagName === 'style') {
        addCSSrule(top.children[0].content)
      }
    } else {
      throw new Error('no match')
    }
  } else if (token.type === 'text') {
    if (currentTextNode === null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode)
    }
    currentTextNode.content += token.content
  }
  
 
}



