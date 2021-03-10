import { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
    render() {
        const { author, poll } = this.props;
        return(
            <div>
                <p>{author.name}</p>
                <img src={`/profiles/${author.avatarURL}`} width="50" height="50"/>
                <p>...{poll.optionOne.text}...</p>
            </div>
        )
    }
}

function mapStateToProps({ polls, users }, { id }) {
    const poll = polls[id];
    return {
        author: users[poll.author],
        poll
    }
}

export default connect(mapStateToProps)(Poll);