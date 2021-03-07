import { getUsers } from '../utils/api';

export const GET_USERS = 'GET_USERS';

function receiveUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function handleReceiveUsers() {
    return (dispatch) => {
        return getUsers()
            .then((users) => dispatch(receiveUsers(users)))
    }
}