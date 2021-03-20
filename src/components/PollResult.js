import { Card, ProgressBar } from 'react-bootstrap';
import { connect } from 'react-redux';

const PollResult = (props) => {
    const {
        userAns,
        ansText,
        ansConst,
        ansVotes,
        totalVotes
    } = props;
    const isAns = userAns === ansConst;
    const percent = ansVotes / totalVotes * 100;

    return (
        <Card
            bg={isAns ? "success" : "light"}
            text={isAns ? "white" : "dark"}
            className="poll-result">
            <Card.Body>
                {isAns
                    ? <span className="vote">Your Vote</span>
                    : null}
                <p>Would you rather {ansText}</p>
                <ProgressBar now={percent} label={`${percent}%`} />
                <span>{`${ansVotes} out of ${totalVotes}`}</span>
            </Card.Body>
        </Card>
    )
}

function mapStateToProps({ polls, users, authUser }, { qid, ansConst }) {
    const poll = polls[qid];
    return {
        userAns: users[authUser]?.answers[poll?.id],
        ansText: poll ? poll[ansConst].text : null,
        ansVotes: poll ? poll[ansConst].votes.length : 0,
        totalVotes: poll ? poll.optionOne.votes.length + poll.optionTwo.votes.length : 0
    }
}

export default connect(mapStateToProps)(PollResult);