import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
  render() {
    const { authUser } = this.props;

    return (
      <Router>
        <Fragment>
          <Header />
          <Route path="/login" component={Login} />
          <Route path="/questions/:id" component={PollDetail} />
          <Route path="/add" component={PollCreate} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route exact path="/" component={Dashboard} />
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
