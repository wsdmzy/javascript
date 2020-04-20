const {
  createStore
} = require('redux')

let a = 123  //a 状态
let globalState = {
  home: {},
  login: {}
}


// 尽量避免全局变量  优点取值方便  但是任意都可修改  造成混乱
// 所以修改设计一套流程   Dan  redux js状态管理库
// redux vuex 都要设计一套流程修改


// reducer:纯函数 => state
// 无副作用,同样的输入,同样输出
// 考虑state默认值,还要考虑后续变更
// state完全自己控制
// state上一次的state action dispacth那个action
function reducer(state,action) {
  // console.log('到达reducer', state, action)
 
  if (action.type === 'CHANGE_HOME_STATE') {
    return {
      home: action.home
    }
  }
  if (action.type === 'DELETE_HOME_STATE') {
    return {

    }
  }

  // 一个type都没命中,返回默认值
  return {
    home: 'home state',
    login: 'login state'
  }
}
// 更新state中数据必须要action   action => reducer => state
// action: js对象  type一定要 发起action?CRUD
let action = {
  type: 'CHANGE_HOME_STATE',
  home: 'home state 1',
  a: 1, b: 2
}
// 生产state
let store = createStore(reducer)
// 拿到成本高
console.log(store.getState())
//dispatch =>  action => reducer => state  修改默认值
store.dispatch(action)
console.log(store.getState())
// deletehome
let action1 = {
  type: "DELETE_HOME_STATE"
}
store.dispatch(action1)
console.log(store.getState())
