import {Switch, Route} from 'react-router-dom'
import AUTH from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

class routes extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Auth}/>
                    <Route path='/Dashboard' component={Dashboard}/>
                    <Route path='/Form' component={Form}/>
                    <Route path='/Post' component={Post}/>
                 </Switch> 
            </div>
        )
    }
}

export default Switch