import { ADD_PRODUCT, UPDATE_PRODUCT } from '../actions/actionsTypes'
import { PRODUCTS_DATA, checkLS, updateProductInLS } from '../store/constans';

let productsCounter = PRODUCTS_DATA.reduce((a,b) => a += b.objects.length,0);


const initialState = {
  products: checkLS(PRODUCTS_DATA),
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = { id: ++productsCounter,  ...action.product};
      return {
        products: [...state.products, newProduct],
      }
    case UPDATE_PRODUCT:
      updateProductInLS(action.product);
      const products = [...state.products].map(category => {
        return {
          ...category,
          objects: category.objects.map(prod => {
            if (action.product.id === prod.id) {
              return action.product;
            } else {
              return prod;
            }
          }) 
        }        
      })
      return {
        products: products,
      }
    default:
      break;
  }
  return state;
}

export default ProductsReducer;

