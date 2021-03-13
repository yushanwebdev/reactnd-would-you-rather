import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleReceiveUsers } from '../actions/users';
import { handleReceivePolls } from '../actions/polls';
import UserSelect from './UserSelect';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveUsers());
    }

    login = (e) => {
        const { isExist, dispatch } = this.props;

        e.preventDefault();

        if(isExist) {
            dispatch(handleReceivePolls());
        }
    }

    render() {
        const { isExist } = this.props;

        if(isExist) {
            return <Redirect to="/home" />
        }

        return(
            <div>
                <form>
                    <UserSelect />
                    <button 
                        onClick={this.login}
                        disabled={isExist}>
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        isExist: !authUser === null
    }
}

export default connect(mapStateToProps)(Login);