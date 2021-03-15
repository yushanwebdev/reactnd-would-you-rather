import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { unSetAuthUser } from '../actions/authUser';

class Header extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.dispatch(unSetAuthUser());
    }

    render() {
        const { authedUser } = this.props;
        return (
            <div>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add">New Question</NavLink>
                    <NavLink to="/leaderboard">Leader Board</NavLink>
                </div>
                <div>
                    <p>Hello, { authedUser?.name }</p>
                    <img src={`/profiles/${authedUser?.avatarURL}`} width="20" height="20"/>
                </div>
                <div>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authUser, users }) {
    return {
        authedUser: users[authUser]
    }
}

export default connect(mapStateToProps)(Header);