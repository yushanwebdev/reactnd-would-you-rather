import { getUsers } from '../utils/api';

export const RECEIVE_USERS = 'GET_USERS';

function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function handleReceiveUsers() {
    return (dispatch) => {
        return getUsers()
            .then((users) => dispatch(receiveUsers(users)))
    }
}