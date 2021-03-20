import { connect } from 'react-redux';
import UserItem from './UserItem';

const UserSelect = (props) => {
    const { userIds, getAuthUser } = props;
    const userSelChange = (e) => {
        const val = e.target.selectedOptions[0].id;

        getAuthUser(val);
    }

    return (
        <select className="form-control mb-3" onChange={userSelChange}>
            <option value="">Select User</option>
            {userIds.map((user) => (
                <UserItem key={user} id={user} />
            ))}
        </select>
    )
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(UserSelect);