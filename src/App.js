// import logo from './logo.svg';
import './App.css';
import {  Switch, Route,BrowserRouter} from "react-router-dom";
import Login from './login/index';
import Signup from './signup/index';
import EmployeeGroups from './employeeGroups';
// import { Layout } from './layout';
// import history from './history';
import React,{Suspense} from 'react';

// const Signup = React.lazy(()=>import("./signup/index"))
// const Login = React.lazy(()=>import("./login/index"))

// const PrivateRoute = ({component:Component,...rest}) => {
//   return(
//     <Route 
//       {...rest}
//       render={(props)=><Component {...props}/>}
//     />
//   )
// }

function App() {
  return (
    <div className="App">
        <Suspense fallback={<h3>Loading..........</h3>}>
          <BrowserRouter >
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/sign-up" component={Signup} exact />
              
              {/* <Layout> */}
                <Route path="/employee-groups" component={EmployeeGroups} exact />
              {/* </Layout> */}
              <Route path="/" component={Login}/>
            </Switch>
          </BrowserRouter>
        </Suspense>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
