import { GET_POLLS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/polls';

export default function polls(state = {}, action) {
    switch(action.type) {
        case GET_POLLS:
            return {
                ...state,
                ...action.polls
            }
        case SAVE_QUESTION:
            return {
                ...state,
                ...action.poll
            }
        default:
            return state;
    }
}