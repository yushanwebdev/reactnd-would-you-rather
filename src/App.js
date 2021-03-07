import { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceivePolls } from './actions/polls';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceivePolls());
  }

  render() {
    return(
      <div>
        App
      </div>
    )
  }
}

export default connect()(App);
