import { connect } from 'react-redux';
import { Container, Tabs, Tab } from 'react-bootstrap';
import PollList from './PollList';

const Dashboard = (props) => {
    const { unAns, ans } = props;
    const unAnsTitle = "Unanswered";
    const ansTitle = "Answered";
    return (
        <Container className="dashboard">
            <Tabs>
                <Tab eventKey="unanswer" title={unAnsTitle}>
                    <PollList list={unAns} />
                </Tab>
                <Tab eventKey="answer" title={ansTitle}>
                    <PollList list={ans} />
                </Tab>
            </Tabs>
        </Container>
    )
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