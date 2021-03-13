import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { handleReceivePolls } from './actions/polls';
import { handleReceiveUsers } from './actions/users';
import { setAuthUser } from './actions/authUser';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PollDetail from './components/PollDetail';
import PollCreate from './components/PollCreate';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';

class App extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <Router>
        <Fragment>
          {authUser ? <Header /> : null}
          <Switch>
            <AuthRoute path="/questions/:id" component={PollDetail} />
            <AuthRoute path="/add" component={PollCreate} />
            <AuthRoute path="/leaderboard" component={Leaderboard} />
            <AuthRoute path="/home" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
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
