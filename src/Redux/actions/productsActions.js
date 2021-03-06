import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './actionsTypes.js';

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
};

const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}

const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id,
  }
}

export { addProduct, updateProduct, deleteProduct };