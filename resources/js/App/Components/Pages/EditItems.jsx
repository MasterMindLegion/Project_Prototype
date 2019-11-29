import React from 'react';
import { Col } from "reactstrap";
import CardEdit from  '../Layout/Main/Cart/CardEdit.jsx';
import { connect } from 'react-redux';

const EditItems = (props) => {
            const productCards = props.items.items.map((x, index) => {
            return (
                <Col key={`product-${x.item_name}-${index}`}>
                    <CardEdit
                        name={x.item_name}
                        item_img={x.item_img}
                        in_stock={x.in_stock}
                        price={x.price_per_item}
                        id={x.id}
                        description={x.description}
                    />
                </Col>
            )}
        );
    return (
        <div>
         {console.log(props)} 
        {console.log("redux props", props)} 
        <p>{productCards}</p>
        </div>
    );
};
const mapStateToProps = state => {
  return {
    loginSuccess: state.loginReducer.loginSuccess,
    items: state.itemReducer
  };
}

// What Actions be used
export default connect(mapStateToProps)(EditItems);