import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import './Header.css';

const Nav = () => {

  const location = useLocation();
  
  React.useEffect(() => {
    const locationName = location.pathname;
    const [...navElements] = document.getElementById('Nav').children;
    navElements.forEach(e => {
      e.classList.remove('isActive');
    });
    
    switch (locationName) {
      case '/':
        navElements[0].classList.add('isActive');
        break;
      case '/products':
        navElements[1].classList.add('isActive');
        break;
      case '/addProduct':
        navElements[2].classList.add('isActive');
        break;
      case '/recipes':
        navElements[3].classList.add('isActive');
        break;
      case '/addRecipe':
        navElements[4].classList.add('isActive');
        break;
      case '/shoplist':
        navElements[5].classList.add('isActive');
        break;
      default:
        break;
    }
  }, [location])

  return (
    <div id="Nav">
      <Link to="/" className="NavItems isActive">START</Link>
      <Link to="/products" className="NavItems">PRODUKTY</Link>
      <Link to="/addProduct" className="NavItems">DODAJ PRODUKT</Link>
      <Link to="/recipes" className="NavItems">PRZEPISY</Link>
      <Link to="/addRecipe" className="NavItems">DODAJ PRZEPIS</Link>
      <Link to="/shoplist" className="NavItems">LISTA ZAKUPÓW</Link>
    </div>
  );
}
 
export default Nav;

// <Link to="/" ><p className="NavItems isActive">START</p></Link>
//       <Link to="/products" ><p className="NavItems">PRODUKTY</p></Link>
//       <Link to="/addProduct" ><p className="NavItems">DODAJ PRODUKT</p></Link>
//       <Link to="/recipes" ><p className="NavItems">PRZEPISY</p></Link>
//       <Link to="/addRecipe" ><p className="NavItems">DODAJ PRZEPIS</p></Link>
//       <Link to="/shoplist" ><p className="NavItems">LISTA ZAKUPÓW</p></Link>