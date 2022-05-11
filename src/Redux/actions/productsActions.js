import { ADD_PRODUCT, EDIT_PRODUCT } from './actionsTypes.js';

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product,
  }
};

const editProduct = (id, product) => {
  return {
    type: EDIT_PRODUCT,
    id,
    product,
  }
}

export { addProduct, editProduct };