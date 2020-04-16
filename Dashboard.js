import React from 'react';
import './App.css';

class Dashboard extends React.Component{
    render(){
        console.log("Hello World")
        return(
            <div> 
                <img src={require("./mhwailment.jpg")} alt="Monster Hunter ailment chart" className="dashboard"/>
            </div>
        );
    }
}

export default Dashboard;
