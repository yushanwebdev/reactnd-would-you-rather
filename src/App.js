import { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {
  render() {
    return(
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default App;
