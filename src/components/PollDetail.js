import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PollAns from './PollAns';
import PollQ from './PollQ';

const PollDetail = (props) => {
    const { isAns, isPolls, isExist, qid } = props;

    if (isPolls && !isExist) {
        return <Redirect to="/404" />
    }

    return (
        <Container className="poll-detail">
            {isPolls
                ? isAns
                    ? <PollQ qid={qid} />
                    : <PollAns qid={qid} />
                : <p>Loading...</p>}
        </Container>
    )
}

function mapStateToProps({ authUser, users, polls }, props) {
    const qid = props.match.params.id;
    return {
        isAns: users[authUser]?.answers[qid] === undefined,
        isPolls: Object.keys(polls).length,
        isExist: polls[qid],
        qid
    }
}

export default connect(mapStateToProps)(PollDetail);