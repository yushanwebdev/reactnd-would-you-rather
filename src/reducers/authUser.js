import { SET_AUTH_USER } from '../actions/authUser';

export default function authUser(state = {}, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return action.id
        default:
            return state
    }
}