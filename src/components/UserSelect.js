import { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserSelect extends Component {
    render() {
        const { userIds } = this.props;
        return (
            <select>
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