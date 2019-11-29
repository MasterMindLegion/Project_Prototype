const startFetchAction  = (arg) => {
  return{
      type: "startFetch",
      payload: arg
  }
}
const initialState = {
  items: []
}
export const itemReducer = (state = initialState, action) => {
switch(action.type) {
  case "startFetch":
    return {
      ...state,
      items: [...action.payload]
    }
  default:
    return state
}
}