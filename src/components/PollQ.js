import { Component } from 'react';
import { connect } from 'react-redux';

class PollQ extends Component {
    render() {
        const { author, poll } = this.props;
        console.log(this.props);
        return (
            <div>
                <div>
                    <p>{author.name}</p>
                    <img src={`/profiles/${author.avatarURL}`} width="50" height="50" />
                </div>
                <div>
                    <p>Would You Rather</p>
                    <form>
                        <div>
                            <input type="radio" id="option-one" name="answer" value={poll.optionOne.text} checked="false" />
                            <label htmlFor="option-one">{poll.optionOne.text}</label>
                        </div>
                        <div>
                            <input type="radio" id="option-two" name="answer" value={poll.optionTwo.text} />
                            <label htmlFor="option-two">{poll.optionTwo.text}</label>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ polls, users }, { id }) {
    const poll = polls[id];
    return {
        poll: poll ? poll : {},
        author: poll ? users[poll.author] : {}
    }
}

export default connect(mapStateToProps)(PollQ);