import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import axios from "axios";
import Sidebar from 'react-sidebar';

class AxiosTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            personList: [],
            sidebarOpen: true
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:5000/users').then(res => {
            this.setState({personList: res.data})
        })
    }

    onSetSidebarOpen(open){
        this.setState({sidebarOpen: open});
    }

    render(){
        return(
            <Sidebar
                sidebar={
                <div>
                    <h2>MENU</h2>
                    <table className="menuList">
                        <tr><a href="#">Home</a></tr>
                        <tr><a href="#">Users</a></tr>
                        <tr><a href="#">Chat</a></tr>
                    </table>
                </div>
            }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white", padding:"50px" } }}>
                <div className="menuHeader">
                    <button type="button" id="menuBtn" className="menuBtn" onClick={() => this.onSetSidebarOpen(true)}></button>
                </div>
                <div className='App-header'>
                    <h2>MGA BOBO</h2>
                    <ul>
                        {this.state.personList.map((person,index) => <li key={index}>{person.firstName} {person.lastName}</li>)}
                    </ul>
                </div>
            </Sidebar>
        );
    }
}

export default AxiosTest;
