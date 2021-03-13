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
        this.props.dispatch(handleReceiveUsers());
    }

    login = (e) => {
        const { isExist, dispatch } = this.props;
        const { val } = this.state;
        const action = val ? setAuthUser(val) : unSetAuthUser();

        e.preventDefault();

        dispatch(action);

        if(isExist) {
            dispatch(handleReceivePolls());
        }
    }

    getAuthUser = (val) => {
        this.setState((prev) => ({
            val
        }))
    }

    render() {
        const { isExist } = this.props;
        const { val } = this.state;

        if(isExist) {
            return <Redirect to="/home" />
        }

        return(
            <div>
                <form>
                    <UserSelect getAuthUser={this.getAuthUser} />
                    <button 
                        onClick={this.login}
                        disabled={val === ''}>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        isExist: authUser !== null
    }
}

export default connect(mapStateToProps)(Login);