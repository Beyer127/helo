import React, { Component } from 'react'
import axios from 'axios'
import Post from '../Post/Post'
import './Dashboard.css'

class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('/api/posts').then(post => {
            this.setState({
                posts: post.data
            })
        })
    }


    render(){
        console.log(this.state.posts)
        return(
            <div>
                <nav className="nav">
                    <p>Home</p>
                    <p>Add Post</p>
                    <a href="http://localhost:3000/#/">Logout</a>
                </nav>
            </div>
        )
    }
}

export default Dashboard