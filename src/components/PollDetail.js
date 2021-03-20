import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PollAns from './PollAns';
import PollQ from './PollQ';

const PollDetail = (props) => {
    const { isAns, qid } = props;

    return (
        <Container className="poll-detail">
            {isAns
                ? <PollQ qid={qid} />
                : <PollAns qid={qid} />}
        </Container>
    )
}

function mapStateToProps({ authUser, users }, props) {
    const qid = props.match.params.id;
    return {
        isAns: users[authUser]?.answers[qid] === undefined,
        qid
    }
}

export default connect(mapStateToProps)(PollDetail);