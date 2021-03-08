import { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { handleReceivePolls } from './actions/polls';
import { handleReceiveUsers } from './actions/users';
import { setAuthUser } from './actions/authUser';

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
        <Dashboard />
      </div>
    )
  }
}

export default connect()(App);
