import React from 'react';
import { Card } from 'react-bootstrap';
import ModalOneProduct from './ModalOneProduct';

const Product = ({product}) => {

  const [showProduct, setShowProduct] = React.useState(false);
  const handleShowProduct = () => setShowProduct(!showProduct);

  return (
    <>
      <ModalOneProduct state={showProduct} handle={handleShowProduct} product={product}/>
      <Card className="me-2 mt-2 product" onClick={handleShowProduct}>
        <Card.Title className="p-2 px-3 fs-6 m-auto" style={{justifyContent:'center'}}>{product}</Card.Title>
      </Card>
    </>
  );
}
 
export default Product;