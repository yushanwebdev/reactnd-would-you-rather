import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PollAns from './PollAns';
import PollQ from './PollQ';

const PollDetail = (props) => {
    const { isAns, isExist, qid } = props;

    if(!isExist) {
        return <Redirect to="/404" />
    }

    return (
        <Container className="poll-detail">
            {isAns
                ? <PollQ qid={qid} />
                : <PollAns qid={qid} />}
        </Container>
    )
}

function mapStateToProps({ authUser, users, polls }, props) {
    const qid = props.match.params.id;
    return {
        isAns: users[authUser]?.answers[qid] === undefined,
        isExist: polls[qid], 
        qid
    }
}

export default connect(mapStateToProps)(PollDetail);