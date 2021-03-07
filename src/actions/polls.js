import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';

export const GET_POLLS = 'GET_POLLS';
export const SAVE_QUESTION = 'SAVE_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWERS';

function receivePolls(polls) {
    return {
        type: GET_POLLS,
        polls
    }
}

export function handleReceivePolls() {
    return (dispatch) => {
        return getQuestions()
            .then((polls) => dispatch(receivePolls(polls)))
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
        return saveQuestion(question)
            .then((poll) => receiveQuestion(poll))
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
        receiveAnswer(answer)
        return saveQuestionAnswer(answer)
            .catch(() => {
                console.warn('Answer is not saved.')
            })
    }
}