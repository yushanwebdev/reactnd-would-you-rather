import { Component } from 'react';
import { connect } from 'react-redux';
import Poll from './Poll';

class Dashboard extends Component {
    render() {
        const { ans, unAns } = this.props;
        return(
            <div>
                <div>
                    <h2>Unanswered</h2>
                    <ul>
                        {unAns.map((item) => (
                            <li key={item}>
                                <Poll id={item} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Answered</h2>
                    <ul>
                        {ans.map((item) => (
                            <li key={item}>
                                <Poll id={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authUser, polls }) {
    const pollIds = Object.keys(polls);
    const sortedPollIds = pollIds.length 
                            ? pollIds
                                .sort((a, b) => polls[b].timestamp - polls[a].timestamp) 
                            : [];
    
    const ans = users[authUser] && pollIds.length
                ? Object.keys(users[authUser].answers)
                        .sort((a, b) => polls[b].timestamp - polls[a].timestamp) 
                : [];

    const unAns = sortedPollIds.filter(poll => (
        !ans.includes(poll)
    ));

    return {
        ans,
        unAns
    }
}

export default connect(mapStateToProps)(Dashboard);