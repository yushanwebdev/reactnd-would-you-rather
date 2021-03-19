import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/polls';

class PollCreate extends Component {
    state = {
        [process.env.REACT_APP_OPTION_ONE]: '',
        [process.env.REACT_APP_OPTION_TWO]: '',
        toHome : false,
        isSave: true
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
        }))
            .then(() => {
                this.setState((prev) => ({
                    toHome: true
                }))
            })
            .catch((e) => {
                this.setState((prev) => ({
                    isSave: false
                }))
            });
    }

    render() {
        const { optionOne, optionTwo, toHome, isSave } = this.state;

        if(toHome) {
            return <Redirect to="/" />
        }

        return (
            <div>
                {!isSave ? <div>Question not saved.</div> : null}
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
                    <button
                        disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>
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