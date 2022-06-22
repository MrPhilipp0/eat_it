import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { updateProduct, deleteProduct } from '../../../Redux/actions/productsActions';
import { Card } from 'react-bootstrap';
import ModalProductProps from './HandleProduct/ModalProductProps';

const Product = ({product, updateProductInState, deleteProductFromState}) => {

  let ref = useRef();

  const [showProduct, setShowProduct] = useState(false);
  const handleShowProduct = () => setShowProduct(!showProduct);

  const handleDeleteProduct = () => {
    handleShowProduct();
    deleteProductFromState(product.id);
    ref.current.className += ' deletedProduct';
  }
  
  return (
    <React.Fragment>
      <ModalProductProps state={showProduct} handleShowProduct={handleShowProduct} product={product} handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={updateProductInState}/>
      <Card ref={ref} className="me-2 mt-2 product" onClick={handleShowProduct} >
        <Card.Title className="p-2 px-3 fs-6 m-auto" style={{justifyContent:'center'}}>
          <p className="d-flex" style={{justifyContent:'center'}}>{product.pol}</p>
          <p className="d-flex fw-light mb-1" style={{justifyContent:'center'}}>{product.eng}</p>
        </Card.Title>
      </Card>
    </React.Fragment>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    updateProductInState : product => {
      dispatch(updateProduct(product))
    },
    deleteProductFromState : id => {
      dispatch(deleteProduct(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(Product);