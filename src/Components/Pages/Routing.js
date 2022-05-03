import { Route, Routes } from 'react-router-dom';

import Start from './Start/Start';
import Products from './Products/Products';
import AddProduct from './AddProduct/AddProduct';
import Recipes from './Recipes/Recipes';
import AddRecipe from './AddRecipe/AddRecipe';
import Shoplist from './Shoplist/Shoplist';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="products" element={<Products/>} />
      <Route path="addProduct" element={<AddProduct/>} />
      <Route path="recipes" element={<Recipes/>} />
      <Route path="addRecipe" element={<AddRecipe/>} />
      <Route path="shoplist" element={<Shoplist/>} />
    </Routes>
  );
}
 
export default Routing;