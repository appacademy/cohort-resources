// Action Constant
export const RECEIVE_COOKIE = 'RECEIVE_COOKIE'

//Action Creator
export const receiveCookie = (cookie) => {
    return {
        type: RECEIVE_COOKIE,
        cookie: cookie
    }
}