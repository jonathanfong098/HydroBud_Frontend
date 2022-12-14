const SIGN_IN_REDIRECT_KEY = 'sign_in_redirect'

const setRedirect = (redirectKey, redirect) => {
    window.sessionStorage.setItem(redirectKey, redirect)
  }
  
const getRedirect = (redirectKey) => {
    return window.sessionStorage.getItem(redirectKey)
}
  
const clearRedirect = (redirectKey) => {
    return window.sessionStorage.removeItem(redirectKey)
}

export { SIGN_IN_REDIRECT_KEY, setRedirect, getRedirect, clearRedirect }