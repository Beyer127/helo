import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Dashboard/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Post from './components/Post/Post'
import AddPost from './components/Post/AddPost'


export default (
        
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/Post' component={Post} />
                <Route path='/AddPost' component={AddPost} />
            </Switch> 
)