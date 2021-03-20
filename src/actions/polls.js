import { showLoading, hideLoading } from 'react-redux-loading';
import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';

export const RECIEVE_POLLS = 'GET_POLLS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

function receivePolls(polls) {
    return {
        type: RECIEVE_POLLS,
        polls
    }
}

export function handleReceivePolls() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions()
            .then((polls) => dispatch(receivePolls(polls)))
            .then(() => dispatch(hideLoading()))
    }
}

function receiveQuestion(poll) {
    return {
        type: SAVE_QUESTION,
        poll
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion(question)
            .then((poll) => dispatch(receiveQuestion(poll)))
            .then(() => dispatch(hideLoading()))
    }
}

function receiveAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

export function handleSaveAnswer(answer) {
    return (dispatch) => {
        dispatch(receiveAnswer(answer));
        return saveQuestionAnswer(answer);
    }
}