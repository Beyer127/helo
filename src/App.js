import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Post from './components/Post/Post'

function App() {
  return (
    <div className="App">
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
