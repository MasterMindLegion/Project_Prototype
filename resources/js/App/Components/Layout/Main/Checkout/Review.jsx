
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
const addresses = ['  ', '', '', '', ''];
const payments = [
  { name: 'Card type', detail: '' },
  { name: 'Card holder', detail: '' },
  { name: 'Card number', detail: '' },
  { name: 'Expiry date', detail: '' },
];


const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));


// const [value, setValue] = React.useState


 function Review(props) {
  const classes = useStyles();
  const value = localStorage.getItem("cart");
  const products = JSON.parse(value);
  //console.log(localstorage_shoppingCart);
  console.log('demoday');

    let total_price = 0;
    products.map(product => {
        total_price += product.price
    })

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            { total_price } CZK
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.formCredentials.firstName}</Typography>
          <Typography gutterBottom>{props.formCredentials.lastName}</Typography>
          <Typography gutterBottom>{props.formCredentials.address1}</Typography>
          <Typography gutterBottom>{props.formCredentials.address2}</Typography>
          <Typography gutterBottom>{props.formCredentials.city}</Typography>
          <Typography gutterBottom>{props.formCredentials.zip}</Typography>
          <Typography gutterBottom>{props.formCredentials.country }</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
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

//what is connect?
export default connect(mapStateToProps)(Review);