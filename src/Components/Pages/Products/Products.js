import { useState } from 'react';
import { connect } from 'react-redux';

import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import List from './List';
import UseSearchProduct from './HandleProduct/filteredProducts';

import '../StylesPage.css';
import './ProductStyle.css';

const Products = ({allProducts}) => {

  const [products, setProducts] = useState(allProducts);
  const handleSetSearch = e => setProducts(UseSearchProduct(e.target.value, allProducts));

  return (
    <section className="page px-5 py-3">
      <div className="d-flex p-4 buttons">
        <Link to="/addProduct">
          <Button className="me-5 fs-4 px-5">Dodaj produkt</Button>
        </Link>
        <FormControl placeholder='Szukaj' onChange={handleSetSearch}/>
      </div>
      
      <button onClick={() => console.log(allProducts)}>aa</button>

      <List PRODUCTS={products}/>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    allProducts : state.ProductsReducer.products,
  };
}
 
export default connect(mapStateToProps)(Products);