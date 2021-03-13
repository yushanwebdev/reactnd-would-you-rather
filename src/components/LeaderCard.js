import { Component } from 'react';
import { connect } from 'react-redux';

class LeaderCard extends Component {
    render() {
        const { user } = this.props;
        const created = Object.keys(user.questions).length;
        const answered = Object.keys(user.answers).length;
        return(
            <div>
                <p>{user.name}</p>
                <img src={`/profiles/${user.avatarURL}`} width="50" height="50"/>
                <div>
                    <p>Created</p>
                    <p>{created}</p>
                </div>
                <div>
                    <p>Answered</p>
                    <p>{answered}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>{created + answered}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(LeaderCard);