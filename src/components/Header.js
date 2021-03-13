import { Component } from 'react';
import { connect } from 'react-redux';
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
                    <a href="#">Home</a>
                    <a href="#">New Question</a>
                    <a href="#">Leader Board</a>
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