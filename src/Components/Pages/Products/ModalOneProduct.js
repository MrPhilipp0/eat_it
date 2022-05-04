import { Modal } from 'react-bootstrap';

const ModalOneProduct = ({state, handle, product}) => {
  return (
    <Modal show={state} onHide={handle}>
      <Modal.Header closeButton>
        <Modal.Title>
          {product}
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}
 
export default ModalOneProduct;