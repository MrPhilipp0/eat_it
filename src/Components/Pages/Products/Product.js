import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ModalProductProps from './HandleProduct/ModalProductProps';

const Product = ({product}) => {

  const [showProduct, setShowProduct] = useState(false);
  const handleShowProduct = () => setShowProduct(!showProduct);
  
  return (
    <React.Fragment>
      <ModalProductProps state={showProduct} handle={handleShowProduct} product={product}/>
      <Card className="me-2 mt-2 product" onClick={handleShowProduct}>
        <Card.Title className="p-2 px-3 fs-6 m-auto" style={{justifyContent:'center'}}>
          <p className="d-flex" style={{justifyContent:'center'}}>{product.pol}</p>
          <p className="d-flex fw-light mb-1" style={{justifyContent:'center'}}>{product.eng}</p>
        </Card.Title>
      </Card>
    </React.Fragment>
  );
}
 
export default Product;