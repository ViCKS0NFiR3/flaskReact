import React from 'react';
import './App.css';

class UserAdd extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            passWord:'',
            age:0,
            address:'',
            email:'',
            contactNo:'',
            profilePic:'',
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
        let raw = JSON.stringify({
            "firstName":this.state.firstName,
            "lastName": this.state.lastName,
            "userName":this.state.username,
            "passWord":this.state.password,
            "age": this.state.age,
            "address": this.state.address,
            "email": this.state.email,
            "contactNo": this.state.contactNo,
            "profilePic": this.state.profilePic
        });

        console.log(raw)
        let requestOptions = {
            method: 'POST',
            headers: requestHeaders,
            body: raw,
            redirect: 'follow'
        };
      
        fetch("http://localhost:5000/users/add", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render(){
        return(
            <div className="App-header"> 
                <h1>User Add</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="firstName" className="App-textField" placeholder="Enter First Name" onChange={this.inputHandler}/>
                    <input type="text" name="lastName" className="App-textField" placeholder="Enter Last Name" onChange={this.inputHandler}/>
                    <input type="text" name="username" className="App-textField" placeholder="Enter Username" onChange={this.inputHandler}/>
                    <input type="password" name="password" className="App-textField" placeholder="Enter Password" onChange={this.inputHandler}/><br/>
                    <input type="text" name="age" className="App-textField" placeholder="Enter Age" onChange={this.inputHandler}/>
                    <input type="text" name="address" className="App-textField" placeholder="Enter Address" onChange={this.inputHandler}/>
                    <input type="text" name="email" className="App-textField" placeholder="Enter Email" onChange={this.inputHandler}/>
                    <input type="text" name="contactNo" className="App-textField" placeholder="Enter Contact Number" onChange={this.inputHandler}/>
                    <input type="text" name="profilePic" className="App-textField" placeholder="Enter Profile Pic" onChange={this.inputHandler}/>
                    <input type="submit" className="App-submit" value="LOGIN"/>
              </form>
            </div>
        );
    }
}

export default UserAdd;