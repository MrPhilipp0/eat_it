import { useState } from 'react';
import { connect } from 'react-redux';

import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import List from './List';

import '../StylesPage.css';
import './ProductStyle.css';

const Products = ({allProducts}) => {

  const [productsSearch, setProductsSearch] = useState(allProducts);

  const handleSearch = e => {
    const searchInp = e.target.value.toLowerCase();

    if(searchInp.length) {
      let productsArr = allProducts.map(categoryProducts => {
        const products = categoryProducts.objects;
        return {
          category: categoryProducts.category,
          objects: products.filter(product => product.pol.toLowerCase().includes(searchInp) || product.eng.toLowerCase().includes(searchInp)),
        }
      });

      productsArr = productsArr.filter(categoryProducts => categoryProducts.objects.length);
      setProductsSearch(productsArr);
    } else {
      setProductsSearch(allProducts);
    }
  }

  return (
    <section className="page px-5 py-3">
      <div className="d-flex p-4 buttons">
        <Link to="/addProduct">
          <Button className="me-5 fs-4 px-5">Dodaj produkt</Button>
        </Link>
        <FormControl placeholder='Szukaj' onChange={handleSearch}/>
      </div>
      <button onClick={() => console.log(allProducts)}>aa</button>

      <List PRODUCTS={productsSearch}/>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    allProducts : state.ProductsReducer.products,
  };
}
 
export default connect(mapStateToProps)(Products);