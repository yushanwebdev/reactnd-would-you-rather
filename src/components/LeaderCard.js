import { Component } from 'react';
import { connect } from 'react-redux';

class LeaderCard extends Component {
    render() {
        console.log(this.props);
        return(
            <div>
                LeaderCard
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