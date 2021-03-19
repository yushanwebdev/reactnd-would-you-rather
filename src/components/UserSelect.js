import { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserSelect extends Component {
    userSelChange = (e) => {
        const { getAuthUser } = this.props;
        const val = e.target.selectedOptions[0].id;

        getAuthUser(val);
    }

    render() {
        const { userIds } = this.props;
        return (
            <select className="form-control mb-3" onChange={this.userSelChange}>
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