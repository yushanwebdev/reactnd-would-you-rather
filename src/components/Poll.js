import { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Poll extends Component {
    render() {
        const { author, poll } = this.props;
        return (
            <Card className="poll">
                <Link to={`/questions/${poll.id}`} className="d-flex">
                    <Card.Img variant="left" src={`/profiles/${author.avatarURL}`} width="90" height="90" />
                    <Card.Body>
                        <p>{author.name}</p>
                        <p>...{poll.optionTwo.text}</p>
                    </Card.Body>
                </Link>
            </Card>
        )
    }
}

function mapStateToProps({ polls, users }, { id }) {
    const poll = polls ? polls[id] : {};
    return {
        author: poll ? users[poll.author] : {},
        poll
    }
}

export default connect(mapStateToProps)(Poll);