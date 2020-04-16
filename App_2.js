import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      user_list: [],
    }
  }


  async componentDidMount(){
    const url = "http://localhost:5000/users";
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    }).then((result) => {
      result.json().then((resp)=>{
      //console.log(resp)
      this.setState({
        isLoaded:true, 
        user_list : [...resp]},()=> {console.log(this.state.user_list)}
        );
      })
    })
  }

  render() {
    console.log(this.state.user_list)
    return (
      <div className="App">
        <h1>Wasak Wetpacks</h1>
        <ul>
          {this.state.user_list.map((user,index) => {
            return <li key={index}>{user.firstName}</li>
          })}
          </ul>
      </div>
    );
  } 
}

export default App;