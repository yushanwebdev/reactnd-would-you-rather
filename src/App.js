import { Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PollDetail from './components/PollDetail';
import PollAdd from './components/PollAdd';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';

import './App.scss';

function App(props) {
  const { authUser } = props;

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        {authUser ? <Header /> : null}
        <Switch>
          <AuthRoute path="/questions/:id" component={PollDetail} />
          <AuthRoute path="/add" component={PollAdd} />
          <AuthRoute path="/leaderboard" component={Leaderboard} />
          <AuthRoute path="/home" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  )
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
