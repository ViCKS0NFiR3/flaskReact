import React from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username: "",
        password: "",
        isLoggedIn: false,
      }
    }
  
    inputHandler = (event) => {
      let val = event.target.value;
      let nam = event.target.name;
      this.setState({[nam]:val});
    }
    
    submitHandler = (event) => {
      event.preventDefault();
      let requestHeaders = new Headers();
      requestHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({"username":this.state.username,"password":this.state.password});
      console.log(`You are submitting username: ${this.state.username} and password: ${this.state.password}`)

      let requestOptions = {
        method: 'POST',
        headers: requestHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    render(){
      return(
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>{window.token}</p>
              <form onSubmit={this.submitHandler}>
                  <input type="text" name="username" className="App-textField" placeholder="Enter username" onChange={this.inputHandler}/>
                  <input type="password" name="password" className="App-textField" placeholder="Enter password" onChange={this.inputHandler}/><br/>
                  <input type="submit" className="App-submit" value="LOGIN"/>
              </form>
            </header>
        </div> 
      );
    }
  }
  export default Login;