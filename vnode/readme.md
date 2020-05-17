tree  DOM树/css渲染树  VNODE 虚拟节点  Virtual DOM

- Virtual DOM   babel AST 抽象语法树
<template>
  <div id='root'>
    <span class="demo">
      this is a span
    </span>
    <P>DOM</p>
  </div>
</template>
JSON  递归算法
{
  tag: div,
  props: {id: 'root'}
  children:[
    {
      tag: div,
      props: {className: demo},
      children: [
        {
          tag: undefined,
          text: ' this is a span'
        }
      ]
    }
    {
       tag: p,
       children: [
        {
          tag: undefined,
          text: 'DOM'
        }
      ]
    }
  ]
}


