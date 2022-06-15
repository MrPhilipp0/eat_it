import { ADD_PRODUCT, UPDATE_PRODUCT } from './actionsTypes.js';

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product,
  }
};

const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}

export { addProduct, updateProduct };