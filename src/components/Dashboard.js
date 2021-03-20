import { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import PollList from './PollList';

class Dashboard extends Component {
    render() {
        const { unAns, ans } = this.props;
        const unAnsTitle = "Unanswered";
        const ansTitle = "Answered";
        return (
            <Tabs id="dashboard">
                <Tab eventKey="unanswer" title={unAnsTitle}>
                    <PollList list={unAns} />
                </Tab>
                <Tab eventKey="answer" title={ansTitle}>
                    <PollList list={ans} />
                </Tab>
            </Tabs>
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