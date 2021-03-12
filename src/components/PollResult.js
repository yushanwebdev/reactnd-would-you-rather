import { Component } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
    render() {
        const { userAns, ansText, ansConst } = this.props;
        return (
            <div>
                {userAns === ansConst
                    ? <b>Your Vote</b>
                    : null}
                <p>Would you rather {ansText}</p>
            </div>
        )
    }
}

function mapStateToProps({ polls, users, authUser }, { qid, ansConst }) {
    const poll = polls[qid];
    return {
        userAns: users[authUser]?.answers[poll?.id],
        ansText: poll ? poll[ansConst].text : null
    }
}

export default connect(mapStateToProps)(PollResult);