import { Component } from 'react';
import { connect } from 'react-redux';
import PollAns from './PollAns';
import PollQ from './PollQ';

class PollDetails extends Component {
    render() {
        const { isAns, qid } = this.props;
        return(
            <div>
                {isAns 
                    ? <PollQ qid={qid} />
                    : <PollAns qid={qid} />}
            </div>
        )
    }
}

function mapStateToProps({ authUser, users }, { qid }) {
    return {
        isAns: users[authUser]?.answers[qid] === undefined
    }
}

export default connect(mapStateToProps)(PollDetails);