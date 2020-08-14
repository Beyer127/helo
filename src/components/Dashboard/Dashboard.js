import React, { Component } from "react";
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return (
        <div className='header'>
             <h1>😜</h1>
             <h2>Helo</h2>
             
             <div className="input">
                <input placeholder="Username"/>
                <input placeholder="Password"/>
             </div>

             <div className="buttons">
                <button>Login</button>
                <button>Register</button>
             </div>
        </div>
    );
  }
}

export default Dashboard;
