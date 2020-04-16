import React from 'react';
import Sidebar from 'react-sidebar';
import Dashboard from './Dashboard';
import Login from './Login';
import User from './User';
import UserAdd from './UserAdd';
import UserDetails from './UserDetails';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sidebarOpen: false
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open){
        this.setState({sidebarOpen: open});
    }
    
    render(){
        return(
            <Router>
            <Sidebar
                sidebar={
                <div className="menuList">
                    <h2>MENU</h2>
                    <ul>
                        <Link className="pagelink" to='/'>
                            <li>Home</li>
                        </Link>
                        <Link className="pagelink" to='/users'>
                            <li>Users</li>
                        </Link>
                        <Link className="pagelink" to='/login'>
                            <li>Login</li>
                        </Link>
                    </ul>
                </div>
            }
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "#282c34", padding:"50px",  } }}>
                <div className="menuHeader">
                    <button type="button" 
                    id="menuBtn" 
                    className="menuBtn" 
                    onClick={() => this.onSetSidebarOpen(true)}/>
                </div>
                <div className="renderedPage">
                    <Switch>
                        <Route path='/' exact component={Dashboard}/>
                        <Route path='/users' exact component={User}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/users/add' exact component={UserAdd}/>
                        <Route path='/users/view/:id' component={UserDetails}/>
                    </Switch>
                </div>
            </Sidebar>
            </Router>
        );
    }
}

export default App;