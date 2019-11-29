import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

 function AddressForm(props) {

  const [formInputValues, setFormInputValues] = useState({
    firstName : '', lastName: '', address1: '', address2 : '', city :'', state : '', zip :'', country : '', 

  })

  const handleNameInputChange = e => {
    setFormInputValues({
      ...formInputValues,
      [e.target.id]: e.target.value
    })
  };

  const handleValues = (firstName, lastName, address1, address2, city, state, zip, country) => {
    console.log(firstName, lastName, address1, address2, city, state, zip, country);
    console.log(props.storeFormCredentials)
    props.storeFormCredentials(firstName, lastName, address1, address2, city, state, zip, country);

 }
 console.log('[ADRESSFORM]', formInputValues)
 console.log('[ADRESSFORM]', props)
  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            value={formInputValues.firstName}
            onChange={handleNameInputChange }
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={formInputValues.lastName}
            onChange={handleNameInputChange }
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            value={formInputValues.address1}
            onChange={handleNameInputChange }
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            value={formInputValues.address2}
            onChange={handleNameInputChange }
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={formInputValues.city}
            onChange={handleNameInputChange }
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            value={formInputValues.zip}
            onChange={handleNameInputChange }
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            value={formInputValues.country}
            onChange={handleNameInputChange }
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Button
                    variant="contained"
                    color="primary"
                    onClick={()=> handleValues(formInputValues.firstName, formInputValues.lastName, formInputValues.address1, formInputValues.address2, formInputValues.city, formInputValues.state, formInputValues.zip)}
                  >Submit
       </Button>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
//==========
// REDUX
//==========
// What state be used
const mapStateToProps = state => {
  return {
    formCredentials: state.checkoutReducer.formCredentials
  };
}
// What Actions be used
const mapDispatchToProps = dispatch => {
  return {
    storeFormCredentials : (firstName, lastName, address1, address2, city, state, zip, country) => {
      dispatch({type: "storeFormCredentials", payload: {firstName, lastName, address1, address2, city, state, zip, country}})
      },
 }
}
//what is connect?
export default connect(mapStateToProps, mapDispatchToProps )(AddressForm);

