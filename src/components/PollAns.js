import { Component } from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PollResult from './PollResult';

const PollAns = (props) => {
    const { author, qid } = props;

    return (
        <Card className="poll-detail-info">
            <Card.Header as="h6">Asked by {author?.name}</Card.Header>
            <Card.Body className="d-flex">
                <div>
                    <img src={`/profiles/${author?.avatarURL}`} width="100" height="100" alt={author?.name} />
                </div>
                <div className="pl-4">
                    <p>Results:</p>
                    <div>
                        <ul>
                            <li className="mb-3">
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

function mapStateToProps({ authUser, users, polls }, { qid }) {
    const poll = polls[qid];
    return {
        author: users[poll?.author]
    }
}

export default connect(mapStateToProps)(PollAns);