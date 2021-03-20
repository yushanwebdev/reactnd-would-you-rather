import { connect } from 'react-redux';

const UserItem = (props) => {
    const { user } = props;

    return(
        <option id={user.id}>{user.name}</option>
    )
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(UserItem);