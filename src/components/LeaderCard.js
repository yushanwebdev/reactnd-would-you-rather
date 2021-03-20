import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

class LeaderCard extends Component {
    render() {
        const { user } = this.props;
        const created = Object.keys(user.questions).length;
        const answered = Object.keys(user.answers).length;
        return (
            <Card className="leader-card">
                <Card.Img variant="left" src={`/profiles/${user.avatarURL}`} width="75" height="75" />
                <Card.Body>
                    <h4>{user.name}</h4>
                    <div className="d-flex">
                        <p className="pr-2 w-75">Answered questions</p>
                        <p>{answered}</p>
                    </div>
                    <div className="d-flex">
                        <p className="pr-2 w-75">Created questions</p>
                        <p>{created}</p>
                    </div>
                </Card.Body>
                <Card>
                    <Card.Header as="p" className="score-title">Score</Card.Header>
                    <Card.Body>{created + answered}</Card.Body>
                </Card>
            </Card>
        )
    }
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id]
    }
}

export default connect(mapStateToProps)(LeaderCard);