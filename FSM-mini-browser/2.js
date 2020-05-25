let htmlStr = `<html>
    <head></head>
    <body>
      <div></div>
    </body>
  </html>
`

// 词法分析， 分词
// {type: element, tagName:'html',tag: 'startTag'}
// {type: element, tagName:'html',tag: 'endTag'}
// 语法分析，  html配对  js编程语言(LL,LR)
// 栈来完成
// startTag push
// end [length-1]  栈顶元素和自己标签名一样  配对 ？ pop
let currentToken = null
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

console.log(JSON.stringify(stack, null, 2))
function emit(token) {
  let top = stack[stack.length - 1]
  if (token.tag === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attribute: [],
      tagName: token.tagName
    }
    // 处理子元素
    top.children.push(element)
    stack.push(element)
  } else if (token.tag === 'endTag') {
    if (top.tagName === token.tagName) {
      stack.pop()
    }
  } else {
    throw new Error('no match')
  }
  // console.log(token)
}

