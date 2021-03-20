import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PollResult from './PollResult';

class PollAns extends Component {
    render() {
        const { author, qid } = this.props;
        return (
            <Card className="poll-q">
                <Card.Header as="h6">Asked by {author?.name}</Card.Header>
                <Card.Body className="d-flex">
                    <div>
                        <img src={`/profiles/${author?.avatarURL}`} width="100" height="100" />
                    </div>
                    <div className="pl-4">
                        <p>Results:</p>
                        <div>
                            <ul>
                                <li>
                                    <PollResult
                                        qid={qid}
                                        ansConst={process.env.REACT_APP_OPTION_ONE} />
                                </li>
                                <li>
                                    <PollResult
                                        qid={qid}
                                        ansConst={process.env.REACT_APP_OPTION_TWO} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ authUser, users, polls }, { qid }) {
    const poll = polls[qid];
    return {
        author: users[poll?.author]
    }
}

export default connect(mapStateToProps)(PollAns);