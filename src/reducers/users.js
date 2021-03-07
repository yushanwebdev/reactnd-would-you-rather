import { RECEIVE_USERS } from '../actions/users';
import { SAVE_ANSWER } from '../actions/polls';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION:
            const { author, id } = action.polls;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        case SAVE_ANSWER:
            const { authedUser, qid } = action.answer;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([qid])
                }
            }
        default:
            return state;
    }
}