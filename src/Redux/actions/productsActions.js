import { ADD_PRODUCT, UPDATE_PRODUCT } from './actionsTypes.js';

const addProduct = (product, category) => {
  return {
    type: ADD_PRODUCT,
    product,
    category
  }
};

const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}

export { addProduct, updateProduct };