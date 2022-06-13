import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsList from './ProductsList';

import '../StylesPage.css';
import './ProductStyle.css';

const PRODUCTS_DATA = [
  {
    category: 'Owoce/Fruits',
    objects: [
      {
        pol: 'Jabłko',
        eng: 'Apple'
      },
      {
        pol: 'Banan',
        eng: 'Banana'
      },
      {
        pol: 'Ananas',
        eng: 'Pineapple'
      },
    ]
  },
  {
    category: 'Warzywa/Vegetables',
    objects: [
      {
        pol: 'Marchew',
        eng: 'Carrot'
      },
      {
        pol: 'Seler',
        eng: 'Celery'
      },
      {
        pol: 'Ziemiak',
        eng: 'Potato'
      },
    ]
  },
  {
    category: 'Napoje/Drinks',
    objects: [
      {
        pol: 'Pepsi',
        eng: 'Pepsi'
      },
      {
        pol: 'Sok pomarańczowy',
        eng: 'Orange juice'
      },
      {
        pol: 'Woda',
        eng: 'Water'
      },
    ]
  },
  {
    category: 'Alkohol/Alcohol',
    objects: [
      {
        pol: 'Piwo',
        eng: 'Beer'
      },
      {
        pol: 'Wódka',
        eng: 'Vodka'
      },
      {
        pol: 'Amaretto',
        eng: 'Amaretto'
      },
    ]
  },
  {
    category: 'Pieczywo/Bread',
    objects: [
      {
        pol: 'Bułka',
        eng: 'Roll'
      },
      {
        pol: 'Chleb tostowy',
        eng: 'Toasted bread'
      },
      {
        pol: 'Chleb pełnoziarnisty',
        eng: 'Whole grain bread'
      },
    ]
  },
  {
    category: 'Nabiał/Dairy',
    objects: [
      {
        pol: 'Ser żółty',
        eng: 'Cheese'
      },
      {
        pol: 'Mozzarella',
        eng: 'Mozzarella'
      },
      {
        pol: 'Mleko',
        eng: 'Milk'
      },
    ]
  },
  {
    category: 'Słodycze/Sweets',
    objects: [
      {
        pol: 'Czekolada gorzka',
        eng: 'Dark chocolate'
      },
      {
        pol: 'Czekolada mleczna',
        eng: 'Chocolate'
      },
      {
        pol: 'Żelki',
        eng: 'Jelly'
      },
    ]
  },
  {
    category: 'Przyprawy/Spices',
    objects: [
      {
        pol: 'Papryka ostra',
        eng: 'Hot pepper'
      },
      {
        pol: 'Papryka słodka',
        eng: 'Sweet pepper'
      },
      {
        pol: 'Bazylia',
        eng: 'Basil'
      },
    ]
  },
]

const Products = () => {

  const [productsSearch, setProductsSearch] = useState(PRODUCTS_DATA);

  const handleSearch = e => {
    const searchInp = e.target.value.toLowerCase();

    if(searchInp.length) {
      let productsArr = PRODUCTS_DATA.map(categoryProducts => {
        const products = categoryProducts.objects;
        return {
          category: categoryProducts.category,
          objects: products.filter(product => product.pol.toLowerCase().includes(searchInp) || product.eng.toLowerCase().includes(searchInp)),
        }
      });

      productsArr = productsArr.filter(categoryProducts => categoryProducts.objects.length);
      setProductsSearch(productsArr);
    } else {
      setProductsSearch(PRODUCTS_DATA);
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