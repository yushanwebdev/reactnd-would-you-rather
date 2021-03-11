import { Component } from 'react';
import { connect } from 'react-redux';
import PollAns from './PollAns';
import PollQ from './PollQ';

class PollDetails extends Component {
    render() {
        const { id } = this.props;
        return(
            <div>
                <PollQ id={id} />
                <PollAns />
            </div>
        )
    }
}

export default connect()(PollDetails);