import { Component } from 'react';
import { connect } from 'react-redux';
import UserSelect from './UserSelect';
import { handleReceiveUsers } from '../actions/users';

class Login extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveUsers());
    }

    render() {
        return(
            <div>
                <UserSelect />
            </div>
        )
    }
}

export default connect()(Login);