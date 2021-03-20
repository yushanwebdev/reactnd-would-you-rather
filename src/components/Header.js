import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { unSetAuthUser } from '../actions/authUser';

class Header extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.dispatch(unSetAuthUser());
    }

    render() {
        const { authedUser } = this.props;
        return (
            <Navbar bg="light" expand="lg" className="mb-5">
                <NavLink className="navbar-brand" to="/">Would You Rather</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">New Question</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/leaderboard">Leader Board</NavLink>
                        </li>
                    </Nav>
                    <div>
                        <span>Hello, {authedUser?.name}</span>
                        <img 
                            src={`/profiles/${authedUser?.avatarURL}`} 
                            width="30" 
                            height="30" 
                            className="ml-3 mr-2"
                            alt={authedUser?.name} />
                        <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authUser, users }) {
    return {
        authedUser: users[authUser]
    }
}

export default connect(mapStateToProps)(Header);