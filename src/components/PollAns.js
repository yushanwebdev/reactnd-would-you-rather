import { Component } from 'react';
import { connect } from 'react-redux';
import PollResult from './PollResult';

class PollAns extends Component {
    render() {
        const { author, qid } = this.props;
        return (
            <div>
                <div>
                    <p>{author?.name}</p>
                    <img src={`/profiles/${author?.avatarURL}`} width="50" height="50" />
                </div>
                <div>
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
            </div>
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