import { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <div>
                    Leaderboard
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users);
    const total = (id) => {
        return Object.keys(users[id].answers).length + Object.keys(users[id].questions).length;
    }
    return {
        board: userIds.sort((a, b) => total(b) - total(a))
    }

}

export default connect(mapStateToProps)(Leaderboard);