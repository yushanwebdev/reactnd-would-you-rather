import { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { setAuthUser, unSetAuthUser } from '../actions/authUser';

class UserSelect extends Component {
    getAuthUser = (e) => {
        const { dispatch } = this.props;
        const val = e.target.value;

        const action = val ? setAuthUser(val) : unSetAuthUser();

        dispatch(action);
    }

    render() {
        const { userIds } = this.props;
        return (
            <select onChange={this.getAuthUser}>
                <option value="">Select User</option>
                {userIds.map((user) => (
                    <UserItem key={user} id={user} />
                ))}
            </select>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(UserSelect);