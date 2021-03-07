import { Component } from 'react';
import { connect } from 'react-redux';

class UserItem extends Component {
    render() {
        const { user } = this.props;
        return(
            <option>{user.name}</option>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(UserItem);