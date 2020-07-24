import React from 'react'
import {BrowserRouter as Router ,Switch,Route }from "react-router-dom";
import Signin from './Users/Signin'
import Signup from './Users/Signup';
import Dashboard from './Users/Dashboard';

const Routes=()=> {
    return (
       
       <Router>
           <Switch>
             <Route path="/" exact component={Signin}/>
             <Route path="/signup"  component={Signup}/>
             <Route path="/dashbord" component={Dashboard}/>
              
           </Switch>
       </Router>
    )
}

export default Routes;