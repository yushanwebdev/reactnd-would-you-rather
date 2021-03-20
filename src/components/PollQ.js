import { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
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
            <Card className="poll-q">
                <Card.Header as="h6">{author?.name} asks</Card.Header>
                <Card.Body className="d-flex">
                    <div>
                        <img src={`/profiles/${author?.avatarURL}`} width="100" height="100" />
                    </div>
                    <div className="pl-5">
                        <p>Would You Rather</p>
                        <form onSubmit={this.saveAnswer}>
                            <div class="form-check">
                                <input 
                                    type="radio" 
                                    id={process.env.REACT_APP_OPTION_ONE} name="answer" 
                                    value={poll?.optionOne.text} 
                                    onClick={this.selectOption}
                                    className="form-check-input" />
                                <label 
                                    htmlFor={process.env.REACT_APP_OPTION_ONE}
                                    className="form-check-label">
                                    {poll?.optionOne.text}
                                </label>
                            </div>
                            <div class="form-check mb-3">
                                <input 
                                    type="radio" 
                                    id={process.env.REACT_APP_OPTION_TWO} name="answer" 
                                    value={poll?.optionTwo.text} 
                                    onClick={this.selectOption}
                                    className="form-check-input" />
                                <label 
                                    htmlFor={process.env.REACT_APP_OPTION_TWO}
                                    className="form-check-label">
                                    {poll?.optionTwo.text}
                                </label>
                            </div>
                            <button 
                                type="submit" 
                                disabled={option === ''}
                                class="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </Card.Body>
            </Card>
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