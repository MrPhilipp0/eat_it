import { ADD_PRODUCT, EDIT_PRODUCT } from '../actions/actionsTypes'
import { PRODUCTS_DATA } from '../store/constans';


let productsCounter = PRODUCTS_DATA.reduce((a,b) => a += b.objects.length,0);

const initialState = {
  products: PRODUCTS_DATA,
}

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = { id: ++productsCounter,  ...action.product};
      return {
        products: [...state.products, newProduct],
      }
    // case EDIT_PRODUCT:
    //   const index = state.tasks.findIndex(task => task.id === action.id);
    //   const tasks = [...state.tasks];
    //   tasks[index] = {...action.task};
    //   return {
    //     // tasks: tasks,
    //   }
    default:
      break;
  }
  return state;
}

export default ProductsReducer;

// check local storage to download products data to store
