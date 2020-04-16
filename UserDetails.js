import React, {useState} from 'react';
import './App.css';
import axios from "axios";



class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail:[],
            passedId : this.props.match
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/users/view/${this.state.passedId.params.id}`).then(res => {
        this.setState({userDetail:res.data})
        console.log(this.state.userDetail)
        })
    }

    render(){
        return(
            <div className='App-header'>
                <ul className="userList">
                {this.state.userDetail.map((info,index) => 
                    <div>
                        <img src={require(`${info.profilePic}`)} alt="Monster Hunter ailment chart"/>
                        <li key={index}>Full Name: {info.firstName} {info.lastName}</li>
                        <li key={index}>Username: {info.userName}</li>
                        <li key={index}>Date Created: {info.dateCreated.$date} </li>
                        <li key={index}>Age: {info.age}</li>
                        <li key={index}>Email: {info.email}</li>
                        <li key={index}>Address: {info.address}</li>
                    </div>
                )}
                </ul>
            </div>
        );
    }        
}
    

export default UserDetail;
