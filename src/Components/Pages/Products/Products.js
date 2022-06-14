import { useState } from 'react';
import { connect } from 'react-redux';

import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsList from './List';

import '../StylesPage.css';
import './ProductStyle.css';

const checkLocalStorage = array => {
  const productsArray = JSON.parse(JSON.stringify(array));
  const LS = JSON.parse(localStorage.getItem('PRODUCTS')) || [];
  if (LS.length) {
    const listIDfromLS = LS.map(item => item.id);
    return productsArray.map(category => {
      return {
        ...category,
        objects: category.objects.map(prod => {
          if (listIDfromLS.includes(prod.id)) {
            return LS.filter(item => item.id === prod.id)[0];
          } else {
            return prod;
          }
        }) 
      }        
    })
  }
}

const Products = ({allProducts}) => {

  const ALL_PRODUCTS = checkLocalStorage(allProducts);

  const [productsSearch, setProductsSearch] = useState(ALL_PRODUCTS);

  const handleSearch = e => {
    const searchInp = e.target.value.toLowerCase();

    if(searchInp.length) {
      let productsArr = ALL_PRODUCTS.map(categoryProducts => {
        const products = categoryProducts.objects;
        return {
          category: categoryProducts.category,
          objects: products.filter(product => product.pol.toLowerCase().includes(searchInp) || product.eng.toLowerCase().includes(searchInp)),
        }
      });

      productsArr = productsArr.filter(categoryProducts => categoryProducts.objects.length);
      setProductsSearch(productsArr);
    } else {
      setProductsSearch(ALL_PRODUCTS);
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

      <ProductsList PRODUCTS={productsSearch}/>
    </section>
  );
}

const mapStateToProps = state => {
  return {
    allProducts : state.ProductsReducer.products,
  };
}
 
export default connect(mapStateToProps)(Products);