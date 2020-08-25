import React, { Component } from "react";
import "./Auth.css";
import axios from "axios";

class Auth extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      newUser: false
    }
  }

  toggle = () => {
    this.setState({
      newUser: !this.state.newUser
    })
  }

    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    handleRegister = () => {
    const {email, password, firstName, lastName} = this.state
    axios.post('/auth/register', {firstName, lastName, email, password}).then(res => {
      this.props.history.push('/Dashboard')
    }).catch(err => {console.log(err)
    alert('Login failed')
    })
  }

  render() {
    const {email, password, firstName, lastName} = this.state
    return <div id="auth-container">
        <div>
          <h1>😜</h1>
          <h2>Helo</h2>
          {this.state.newUser ?
          <div className='auth-container'>
            <input onChange={e => this.handleChange(e)} name="email" type="text" value={email} placeholder="Email" />
            <input onChange={e => this.handleChange(e)} name="password" type="text" value={password} placeholder="Password" />
            <div className="btn-container">
              <button>Login</button>
              <button onClick={this.toggle}>Sign Up</button>
            </div>
            </div>
          :
          <div className="auth-container">
             <input onChange={e => this.handleChange(e)} name="firstName" type="text" value={firstName} placeholder="First Name" />
             <input onChange={e => this.handleChange(e)} name="lastName" type="text" value={lastName} placeholder="lastName" />
             <input onChange={e => this.handleChange(e)} name="email" type="text" value={email} placeholder="Email" />
             <input onChange={e => this.handleChange(e)} name="password" type="text" value={password} placeholder="Password" />
             <div className="btn-container">
               <button onClick={e => this.handleRegister(e)}>Register</button>
               <button>I already have an account</button>
             </div>
          </div>
      }
      </div>
      </div>
  }
}
          
   
       
  



export default Auth;
