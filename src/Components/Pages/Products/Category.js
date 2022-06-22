import React from 'react';
import Product from "./Product";
import { Button } from 'react-bootstrap';

const Category = ({category, objects}) => {

  const [visibility, setVisibility] = React.useState(true);
  const handleVisibility = () => setVisibility(!visibility);

  const categoryNames = category.split('/');

  return (
    <div className='mt-2'>
      <div className="d-flex">
        <Button onClick={handleVisibility} className="ms-4 mt-3" variant="dark">
          <p className="fs-5 mb-1">{categoryNames[0]}</p>
          <p className="mb-1 fw-light">{categoryNames[1]}</p>
        </Button>
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

export default Category;