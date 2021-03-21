import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { unSetAuthUser } from '../actions/authUser';

const Header = (props) => {
    const { authedUser, dispatch, history } = props;
    const logout = (e) => {
        e.preventDefault();
        dispatch(unSetAuthUser());
        history.push('/');
    }

    if(!authedUser) {
        return null;
    }

    return (
        <Navbar bg="light" expand="lg" className="mb-5 header">
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
                    <button className="btn btn-dark" onClick={logout}>Logout</button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

function mapStateToProps({ authUser, users }) {
    return {
        authedUser: users[authUser]
    }
}

export default withRouter(connect(mapStateToProps)(Header));