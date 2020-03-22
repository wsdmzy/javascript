# Promise
pending -> fuifilled  
        -> rejected   状态转变后会保持该状态(不会发生变化)


        // Promise.then(onFufilled, onRejected)  onFufilled, onRejected可选参数 必须是函数

        race(iterable)
        当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
