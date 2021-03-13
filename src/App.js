import { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceivePolls } from './actions/polls';
import { handleReceiveUsers } from './actions/users';
import { setAuthUser } from './actions/authUser';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PollDetail from './components/PollDetail';
import PollCreate from './components/PollCreate';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleReceiveUsers());
    dispatch(setAuthUser('tylermcginnis'));
    dispatch(handleReceivePolls());
  }

  render() {
    return(
      <div>
        <Header />
        <Leaderboard />
      </div>
    )
  }
}

export default connect()(App);
