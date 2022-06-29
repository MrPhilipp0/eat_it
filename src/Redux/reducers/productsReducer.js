import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/actionsTypes'
import { PRODUCTS_DATA, checkLS, updateProductInLS } from '../store/constans';

const initialState = {
  products: checkLS(PRODUCTS_DATA),
}

const ProductsReducer = (state = initialState, action) => {
  let newStateProducts = [];
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = {...action.product};
      newProduct.id = Math.max(...state.products.map(prod => prod.id)) + 1;
      updateProductInLS(newProduct);
      return {
        products: [...state.products, newProduct]
      }
      
    case UPDATE_PRODUCT:
      updateProductInLS(action.product);
      newStateProducts = state.products.map(prod => {
        if (action.product.id === prod.id) {
          return action.product;
        } else {
          return prod;
        }
      }) 
      return {
        products: newStateProducts,
      }

    case DELETE_PRODUCT:
      newStateProducts = state.products.filter(prod => prod.id !== action.id);
      localStorage.setItem('PRODUCTS', JSON.stringify(newStateProducts));
      return {
        products: newStateProducts,
      }

    default:
      break;
  }
  return state;
}

export default ProductsReducer;

