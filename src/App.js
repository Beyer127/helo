import React from "react";
import "./App.css";
import './reset.css'
import {Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Post from './components/Post/Post'
import AddPost from './components/Post/AddPost'
 
class App extends React.Component {
  render(){
    return (
      <div className='App'>
         <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path='/Dashboard' component={Dashboard}/>
                <Route path='/Post' component={Post}/>
                <Route path='/AddPost' component={AddPost}/>
            </Switch> 
      </div>
    );
  }
}

export default App;
