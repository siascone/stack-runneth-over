import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        )
}

export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveSessionErrors(err.responseJSON))
        )
}

export const logout = (userId) => (dispatch) => {
    return APIUtil.logout(userId)
        .then(user => dispatch(logoutCurrentUser()))
}