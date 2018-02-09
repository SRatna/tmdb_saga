/**
 * Created by sushanta on 2/5/18.
 */
let initialState = {
  loginError: null,
  isAuthenticated: !!sessionStorage.getItem('token'),
  username: sessionStorage.getItem('username') || '',
  token: sessionStorage.getItem('token') || ''
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_DONE':
      if (action.token !== '') {
        sessionStorage.setItem('username', action.username);
        sessionStorage.setItem('token', action.token);
        return {
          ...state, isAuthenticated: true, username: action.username, loginError: null, token: action.token
        };
      } else {
        return {
          ...state, isAuthenticated: false, username: '', loginError: action.loginError
        }
      }
    case 'LOGOUT_USER':
      sessionStorage.clear();
      return {
        ...state, isAuthenticated: false, username: '', token: ''
      };
    default:
      return state
  }
};
export default login;