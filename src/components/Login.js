import { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';
import { handleReceiveUsers } from '../actions/users';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveUsers());
    }

    render() {
        const { isExist } = this.props;
        return(
            <div>
                <form>
                    <UserSelect />
                    <button disabled={isExist}>
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