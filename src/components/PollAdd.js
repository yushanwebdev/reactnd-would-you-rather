import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/polls';

class PollAdd extends Component {
    state = {
        [process.env.REACT_APP_OPTION_ONE]: '',
        [process.env.REACT_APP_OPTION_TWO]: '',
        toHome: false
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
        this.setState((prev) => ({
            toHome: true
        }));
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state;

        if (toHome) {
            return <Redirect to="/" />
        }

        return (
            <Container className="poll-add">
                <h2 className="mb-4">Add Your Poll</h2>
                <form onSubmit={this.saveQuestion}>
                    <input
                        type="text"
                        name={process.env.REACT_APP_OPTION_ONE}
                        value={optionOne}
                        onChange={this.inputChange}
                        className="form-control mb-3" />
                    <p>OR</p>
                    <input
                        type="text"
                        name={process.env.REACT_APP_OPTION_TWO}
                        value={optionTwo}
                        onChange={this.inputChange}
                        className="form-control mb-3" />
                    <button
                        type="submit" 
                        disabled={optionOne === '' || optionTwo === ''}
                        className="btn btn-dark">
                        Submit
                    </button>
                </form>
            </Container>
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(PollAdd);