import { ADD_PRODUCT, UPDATE_PRODUCT } from '../actions/actionsTypes'
import { PRODUCTS_DATA, checkLS, updateProductInLS } from '../store/constans';

let productsCounter = PRODUCTS_DATA.reduce((a,b) => a += b.objects.length,0);

const initialState = {
  products: checkLS(PRODUCTS_DATA),
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = {...action.product};
      newProduct.id = ++productsCounter;
      const newState2 = [...state.products].map(cat => {
        if (cat.category === action.category) {
          return {
            category: cat.category,
            objects: [...cat.objects, newProduct],
          }
        } else {
          return cat
        }
      });
      return {
        products: newState2 
      } 
    case UPDATE_PRODUCT:
      updateProductInLS(action.product);
      const newState = [...state.products].map(cat => {
        return {
          ...cat,
          objects: cat.objects.map(prod => {
            if (action.product.id === prod.id) {
              return action.product;
            } else {
              return prod;
            }
          }) 
        }        
      })
      return {
        products: newState,
      }
    default:
      break;
  }
  return state;
}

export default ProductsReducer;

