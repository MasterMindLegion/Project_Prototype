
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
        <Button color="primary" onClick={toggle}>Keep shopping</Button>{' '}
        <Button color="secondary" onClick={toggle}>Go to cart</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}
export default AddedProduct;

