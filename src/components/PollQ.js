import { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/polls';
 
class PollQ extends Component {
    state = {
        option: ''
    }

    selectOption = (e) => {
        this.setState((prev) => ({
            option: e.target.id
        }))
    }

    saveAnswer = (e) => {
        e.preventDefault();
        const { authUser, poll, dispatch } = this.props;
        const { option } = this.state;
        dispatch(handleSaveAnswer({
            authedUser: authUser,
            qid: poll.id,
            answer: option
        }));
    }

    render() {
        const { author, poll } = this.props;
        const { option } = this.state;
        return (
            <div>
                <div>
                    <p>{author?.name}</p>
                    <img src={`/profiles/${author?.avatarURL}`} width="50" height="50" />
                </div>
                <div>
                    <p>Would You Rather</p>
                    <form onSubmit={this.saveAnswer}>
                        <div>
                            <input type="radio" id={process.env.REACT_APP_OPTION_ONE} name="answer" value={poll?.optionOne.text} onClick={this.selectOption} />
                            <label htmlFor={process.env.REACT_APP_OPTION_ONE}>{poll?.optionOne.text}</label>
                        </div>
                        <div>
                            <input type="radio" id={process.env.REACT_APP_OPTION_TWO} name="answer" value={poll?.optionTwo.text} onClick={this.selectOption} />
                            <label htmlFor={process.env.REACT_APP_OPTION_TWO}>{poll?.optionTwo.text}</label>
                        </div>
                        <button disabled={option === ''}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ polls, users, authUser }, { qid }) {
    const poll = polls[qid];
    return {
        poll: poll,
        author: users[poll?.author],
        authUser
    }
}

export default connect(mapStateToProps)(PollQ);