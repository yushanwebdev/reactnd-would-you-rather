import { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';
import { handleReceiveUsers } from '../actions/users';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveUsers());
    }

    login = (e) => {
        e.preventDefault();
        if(isExist) {
            dispatch(handleReceivePolls());
        }
    }

    render() {
        const { isExist } = this.props;

        if(isExist) {
            return <Redirect to="/" />
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
        isExist: authUser === null
    }
}

export default connect(mapStateToProps)(Login);