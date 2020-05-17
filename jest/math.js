function add(a,b) {
  return a+b
}

function min(a,b) {
  return a-b
}



// let expect = 10
// let res = add(7,3)
// if (expect !== res) {
//   throw new Error('错误')
// }

// 断言库
function should(res) {
  return {
    equal: function(expect) {
      if (res !== expect) {
        throw new Error('错误')
      }
    }
  }
}

function it(desc, fn) {
  try {
    fn()
    console.log('√ pass')
  } catch (error) {
    console.log('error')
  }
}



it('test', () => {
  should(add(7,3)).equal(10)
})

it('test', () => {
  should(min(7,3)).equal(10)
})