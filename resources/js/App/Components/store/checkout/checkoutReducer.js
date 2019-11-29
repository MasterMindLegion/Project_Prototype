const storeFormCredentialsAction = {
    type: "storeFormCredentials"
  }

  const storeFormCredentials = (firstName, lastName, address1, address2, city, state, zip, country) => {
      console.log("storeForm",{
        type: "storeFormCredentials",
        payload: {firstName, lastName, address1, address2, city, state, zip, country}
      })
    return {
      type: "storeFormCredentials",
      payload: {lastName, address1, address2, city, state, zip, country}
    }
  }
  const initialState = {
    formCredentials: {},
  }
  export const checkoutReducer = (state = initialState, action) => {
      //console.log('checkoutReducer', [...action.payload])
      console.log('checkout', action)
    switch(action.type) {
      case "storeFormCredentials":
        return {
          ...state,
          formCredentials: {...action.payload}
        }

      default:
        
        return state 
    }
    
  }
  