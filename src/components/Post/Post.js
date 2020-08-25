import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    constructor(){
        super()

        this.state = {
            body: '',
            image: '',
            edit: false
        }
    }

    addPost = (body, image) => {
        axios.post('/api/post', {body, image}).then(res => {
            this.setState = ({body: res.data, image: res.data})
            this.props.history.push('/Dashboard')
        }).catch(err => console.log(err))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
        if(this.props.match.params.id){
            this.setState({edit: true})
        }
    }

    editPost = (body, image, id) => {
        axios.put(`/api/post/${id}`, {body, image}).then(() => {
            this.props.history.push('/dashboard')
        })
    }


    render(){
        const {body, image} = this.state
        return (
            <div>
                <div id='input'>
                    <input onChange={(e) => this.handleChange(e)} placeholder='body' value={body} name='body' />
                    <input onChange={(e) => this.handleChange(e)} placeholder='image' value={image} name='image' />
                </div>

                <div id="buttons">
                    <button onClick={() => {this.addPost(body, image)}}>Add Post</button>
                    {edit?(
                        <button onClick={() => {this.editPost(body, image, this.props.match.params.id)}}>Edit</button>
                        ):<button onClick={() => {this.addPost(body, image)}}>Done</button>
                    }
                </div>
            </div>
        )
    }
}

export default Post