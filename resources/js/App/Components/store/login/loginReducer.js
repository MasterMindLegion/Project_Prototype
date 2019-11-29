const loginAction = {
  type: "login",
}
const logoutAction = {
  type: "logout"
}
const storeCredentialsAction = (email, password) => {
  return {
    type: "storeCredentials",
    payload: {email, password}
  }

}
const initialState = {
  loginSuccess: false, 
  showRegisterLink : false,
  _token: null,
  credentials: [],
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
      case "storeCredentials":
        return {
          ...state,
          credentials: [...action.payload]
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
