// handle   resolve reject   两个参数都是函数

const isFunction = variable => typeof variable === 'function'
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error("MyPromise must accept a function as parameter")
    }
    this._status = PENDING  //初始值
    this._value = undefined
    this._fulfilledQuenues = []
    this._rejectedQuenues = []
    //handle的参数绑定内部函数
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve(val) {
    if (this._status !== PENDING) return
    this._status = FULFILLED //状态改变
    this._value = val
    let cb;
    while (cb = this._fulfilledQuenues.shift()) {
      cb(val)
    }
  }
  _reject(err) {
    if (this._status !== PENDING) return
    this._status = REJECTED //状态改变
    this._value = err
    let cb;
    while (cb = this._rejectedQuenues.shift()) {
      cb(err)
    }
  }



  // 状态改变之后才能调用
  then(onFufilled, onRejected) {
    // 解析出调用then的对象的属性
    const { _value, _status } = this
    return new MyPromise((onFufilledNext, onRejectedNext) => {
      //成功时执行的函数
      let fulfilled = value => {
        try {
          //判断onFufilled是否为函数

          if (!isFunction(onFufilled)) { 
            onFufilledNext(value) //不是函数 直接调用下一个回调函数
          } else {
            let res = onFufilled(value) //调用回调函数onFufilled
            // 判断res 是否为Promise对象
            if (res instanceof MyPromise) {
              //是promise对象 必须等待状态改变后在执行一个回调
              res.then(onFufilledNext,onRejectedNext) 
            } else {
              // 不是promise对象 这里的执行结果作为参数传入下一个then的回调函数
              onFufilledNext(res)
            }
          }
        } catch (error) {
          onRejectedNext(error)
        }
      }
      // 失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
            let res = onRejected(error)
            if (res instanceof MyPromise) {
              res.then(onFufilledNext, onRejectedNext)
            } else {
              onRejectedNext(res)
            }
          }
        } catch (error) {
          onRejectedNext(error)
        }
      }
      switch (_status) {
        case PENDING:  //pending状态 将两个函数入列
          this._fulfilledQuenues.push(fulfilled)
          this._rejectedQuenues.push(rejected)
          break;
        case FULFILLED: //fulfilled状态 直接调用
          fulfilled(_value)
          break;
        case REJECTED:  //rejected状态直接调用
          rejected(_value)
          break;
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value
    } else {
      return new MyPromise((resolve)  => {
        resolve(value)
      })
    }
  }

  static reject(error) {
    if (error instanceof MyPromise) {
      return error
    } else {
      return new MyPromise((resolve, reject) => {
        reject(error)
      })
    }
  }

  static all(list) {
    return new MyPromise((resolve, reject) => {
      let value = []
      let count = 0
      // entries() 返回数组的迭代对象
      for (let [i,p] of list.entries()) {
        this.resolve(p).then(res => {
          value[i] = res
          count++
        }, err => {
          reject(err)
        })
      }
      if (list.length === count) {
        resolve(value)
      }
      
    })
  }

  static race(list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
}