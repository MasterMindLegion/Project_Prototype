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
console.log('itemReducer', action)
  switch(action.type) {
    case "startFetch":
      return {
        ...state,
        items: state.items.push(action.payload)
        
      }
    default:
      return state 
  }
  
}
