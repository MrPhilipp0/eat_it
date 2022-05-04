import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsList from './ProductsList';

import '../StylesPage.css';
import './ProductStyle.css';

const PRODUCTS = [
  {
    category: "Owoce",
    products: ["Jabłko", "Banan", "Ananas"],
  },
  {
    category: "Warzywa",
    products: ["Marchew", "Seler", "Ziemiak"],
  },
  {
    category: "Napoje",
    products: ["Pepsi", "Sok pomarańczowy", "Woda"],
  },
  {
    category: "Alkohol",
    products: ["Piwo", "Wódka", "Amaretto"],
  },
  {
    category: "Pieczywo",
    products: ["Bułka kajzerka", "Chleb tostowy", "Chleb pełnoziarnisty"],
  },
  {
    category: "Nabiał",
    products: ["Ser żółty", "Mozzarella", "Mleko 3,2%"],
  },
  {
    category: "Słodycze",
    products: ["Czekolada gorzka", "Czekolada mleczna", "Żelki"],
  },
  {
    category: "Przyprawy",
    products: ["Papryka słodka", "Papryka ostra", "Bazylia"],
  }
]

const Products = () => {

  const [productsSearch, setProductsSearch] = useState(PRODUCTS);

  const handleSearch = e => {
    const searchInp = e.target.value.toLowerCase();

    if(searchInp.length) {
      let productsArr = PRODUCTS.map(categoryProducts => {
        const products = categoryProducts.products;
        return {
          category: categoryProducts.category,
          products: products.filter(product => product.toLowerCase().includes(searchInp)),
        }
      });

      productsArr = productsArr.filter(categoryProducts => categoryProducts.products.length);
      setProductsSearch(productsArr);
    } else {
      setProductsSearch(PRODUCTS);
    }
  }

  return (
    <section className="page">
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
 
export default Products;