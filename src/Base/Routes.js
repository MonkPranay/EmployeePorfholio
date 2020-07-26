import React from 'react'
import {BrowserRouter as Router ,Switch,Route }from "react-router-dom";
import Signin from '../Users/Signin'
import Signup from '../Users/Signup';
import Dashboard from '../Users/Dashboard';
import Profile from '../Users/Profile';
import PrivateRoute from '../Auth/PrivateRoute'

const Routes=()=> {
    return (
       
       <Router>
           <Switch>
             <Route path="/" exact component={Signin}/>
             <Route path="/signup" exact component={Signup}/>
             <PrivateRoute path="/dashbord" exact component={Dashboard}/>
             <PrivateRoute path="/dashbord/profile" component={Profile}/>
           </Switch>
       </Router>
    )
}

export default Routes;