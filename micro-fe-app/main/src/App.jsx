import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// 组件懒加载   加载过程
function Pay() {
  // 引入一个远程的Pay资源   上线完后就是url
  
  // fetch()
  // xmlhttprequest
  const MicroApp1 = lazy(() => System.import('http://127.0.0.1:8080/dist/Pay.js'))
  return (
    <Suspense fallback="loading">
      <MicroApp1 />
    </Suspense>
  )
}
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay}/>
        </Switch>
      </div>
    </Router>
  );
}