import { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { handleReceivePolls } from './actions/polls';
import { handleReceiveUsers } from './actions/users';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleReceivePolls());
    dispatch(handleReceiveUsers());
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
