const loginAction = {
  type: "login",
}
const logoutAction = {
  type: "logout"
}
const initialState = {
  loginSuccess: false, 
  showRegisterLink : false,
  _token: null,
 // _token: window.localStorage.getItem('_token'),
}
export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case "login":
      return {
        ...state,
        _token: window.localStorage.getItem('_token'),
        loginSuccess: true 
      }
    case "logout":
      return {
        ...state, 
        _token: window.localStorage.clear(),
        loginSuccess: false 
      }
      case "setHasCharit" :
          return{
            ...state,
            showRegisterLink: action.showRegisterLink,        
          }
    default:
      return state 
  }
  
}
