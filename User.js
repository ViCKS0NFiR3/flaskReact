import React from 'react';
import './User.css';
import UserAdd from './UserAdd';
import axios from "axios";
import { Link } from 'react-router-dom';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            personList: []
        }
    }
   
    componentDidMount() {
        axios.get('http://localhost:5000/users').then(res => {
            this.setState({personList: res.data})
            console.log(res);
        })
    }

    
    render(){
        return(
            <div className='App-header'>
                <Link className="pagelink" to={`/users/add`}>Add User</Link>
                <h2>MGA BOBO</h2>
                <ul className="userList">
                    {this.state.personList.map((person,index) => <li key={index}><Link className="pagelink" to={`/users/view/${person._id.$oid}`}>{person.firstName} {person.lastName}</Link></li>)}
                </ul>
            </div>
        );
    }
}

export default User;
