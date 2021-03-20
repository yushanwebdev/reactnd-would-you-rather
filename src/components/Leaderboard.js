import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import LeaderCard from './LeaderCard';

const Leaderboard = (props) => {
    const { board } = props;
    return (
        <Container className="leader-board">
            <ul>
                {board.map(item => (
                    <li key={item} className="mb-4">
                        <LeaderCard id={item} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users);
    const total = (id) => {
        return Object.keys(users[id].answers).length + Object.keys(users[id].questions).length;
    }
    return {
        board: userIds.sort((a, b) => total(b) - total(a))
    }

}

export default connect(mapStateToProps)(Leaderboard);