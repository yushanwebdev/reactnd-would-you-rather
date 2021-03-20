import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleReceiveUsers } from '../actions/users';
import { handleReceivePolls } from '../actions/polls';
import { setAuthUser, unSetAuthUser } from '../actions/authUser';
import UserSelect from './UserSelect';

class Login extends Component {
    state = {
        val: ''
    }

    componentDidMount() {
        const { isUsers, dispatch } = this.props;

        if (!isUsers)
            dispatch(handleReceiveUsers());
    }

    login = (e) => {
        const { isPolls, dispatch } = this.props;
        const { val } = this.state;
        const action = val ? setAuthUser(val) : unSetAuthUser();

        e.preventDefault();

        dispatch(action);

        if (!isPolls)
            dispatch(handleReceivePolls());
    }

    getAuthUser = (val) => {
        this.setState((prev) => ({
            val
        }))
    }

    render() {
        const { isExist, location } = this.props;
        const { val } = this.state;
        const page = location.state ? location.state.prevLoc : '/home';

        if (isExist) {
            return <Redirect to={page} />
        }

        return (
            <div className="d-flex justify-content-center align-items-center login">
                <div className="card">
                    <div className="card-body">
                        <h1 className="mb-4">Login</h1>
                        <form>
                            <UserSelect getAuthUser={this.getAuthUser} />
                            <button
                                onClick={this.login}
                                disabled={val === ''}
                                className="btn btn-primary">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authUser, polls, users }) {
    return {
        isExist: authUser !== null,
        isPolls: Object.keys(polls).length,
        isUsers: Object.keys(users).length
    }
}

export default connect(mapStateToProps)(Login);