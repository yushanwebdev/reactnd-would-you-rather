import { RECIEVE_POLLS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/polls';

export default function polls(state = {}, action) {
    switch(action.type) {
        case RECIEVE_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case SAVE_QUESTION:
            return {
                ...state,
                ...action.poll
            }
        case SAVE_ANSWER:
            const { authedUser, qid, option } = action.answer;
            return {
                ...state,
                [qid]: {
                    ...state.polls[qid],
                    [option]: state.polls[option].votes.concat([authedUser])
                }
            }
        default:
            return state;
    }
}