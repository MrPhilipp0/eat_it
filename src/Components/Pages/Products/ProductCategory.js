import React from 'react';
import Product from "./Product";
import { Button } from 'react-bootstrap';

const ProductCategory = ({category, objects}) => {

  const [visibility, setVisibility] = React.useState(true);
  const handleVisibility = () => setVisibility(!visibility);

  return (
    <div className='mt-2'>
      <div className="d-flex">
        <Button onClick={handleVisibility} className="ms-4 mt-3 fs-5" variant="dark">{category}</Button>
      </div>
      {
        visibility && (
          <div className="d-flex ms-4">
            {objects.map(product => <Product key={product.pol} product={product}/>)}
          </div>
        )
      }
    </div>
  );
}
 
export default ProductCategory;