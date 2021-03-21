import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PollDetail from './components/PollDetail';
import PollAdd from './components/PollAdd';
import Leaderboard from './components/Leaderboard';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';
import NotFound from './components/NotFound';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Header />
        <Switch>
          <AuthRoute path="/questions/:id" component={PollDetail} />
          <AuthRoute path="/add" component={PollAdd} />
          <AuthRoute path="/leaderboard" component={Leaderboard} />
          <AuthRoute path="/home" component={Dashboard} />
          <AuthRoute path="/404" component={NotFound} />
          <Route path="/" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  )
}

export default App;
