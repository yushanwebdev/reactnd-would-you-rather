import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Poll extends Component {
    render() {
        const { author, poll } = this.props;
        return(
            <Link to={`/questions/${poll.id}`}>
                <p>{author.name}</p>
                <img src={`/profiles/${author.avatarURL}`} width="50" height="50"/>
                <p>...{poll.optionOne.text}...</p>
            </Link>
        )
    }
}

function mapStateToProps({ polls, users }, { id }) {
    const poll = polls ? polls[id]: {};
    return {
        author: poll ? users[poll.author] : {},
        poll
    }
}

export default connect(mapStateToProps)(Poll);