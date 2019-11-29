
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Link }from "react-router-dom";

const AddedProduct = (props) => {
  const {
    buttonLabel
  } = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (

  
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
        This product has been added to your cart
        </ModalBody>
      <ModalFooter>
        <Link color="primary" onClick={toggle} to="/app/products">Keep shopping</Link>{' '}
        <Link color="secondary" onClick={toggle} to="/app/cart">Go to cart</Link>
        <Link to="/app/checkout">Proceed to Checkout</Link>
      </ModalFooter>
    </Modal>
  </div>
);
}
export default AddedProduct;

