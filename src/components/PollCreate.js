import { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/polls';

class PollCreate extends Component {
    state = {
        [process.env.REACT_APP_OPTION_ONE]: '',
        [process.env.REACT_APP_OPTION_TWO]: ''
    }

    inputChange = (e) => {
        const ele = e.target;
        this.setState((prev) => ({
            [ele.name]: ele.value
        }));
    }

    saveQuestion = (e) => {
        e.preventDefault();
        const { dispatch, authUser } = this.props;
        const { optionOne, optionTwo } = this.state;
        dispatch(handleSaveQuestion({ 
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authUser
        }));
    }

    render() {
        const { optionOne, optionTwo } = this.state; 
        return(
            <div>
                <form onSubmit={this.saveQuestion}>
                    <input 
                        type="text" 
                        name={process.env.REACT_APP_OPTION_ONE} 
                        value={optionOne} 
                        onChange={this.inputChange} />
                    <p>OR</p>
                    <input 
                        type="text" 
                        name={process.env.REACT_APP_OPTION_TWO} 
                        value={optionTwo} 
                        onChange={this.inputChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(PollCreate);