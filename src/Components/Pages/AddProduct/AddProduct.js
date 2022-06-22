/* eslint-disable no-eval */
import React, { useState } from 'react';
import { downloadProductData } from '../Products/HandleProduct/downloadData';
import { propertiesLangMap, firstLetterUpperCase, ALERT_TYPES, CATEGORIES } from '../../../Redux/store/constans';
import { connect } from 'react-redux';
import AlertComponent from '../../Objects/AlertComponent';
import { Form } from 'react-bootstrap';

import '../StylesPage.css';
import { addProduct } from '../../../Redux/actions/productsActions';

const defaultProduct = {
  pol: '',
  eng: '',
  category: '',
  calories: '',
  cholesterol: '',
  fat: '',
  fiber: '',
  potassium: '',
  protein: '',
  sodium: '',
  sugar: ''
};

const AddProduct = ({allProducts, addProductToState}) => {

  const [props, setProps] = useState(defaultProduct);

  const [showAlert, setShowAlert] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleSetShowAlert = () => setShowAlert(!showAlert);

  const [alertType, setAlertType] = useState('');

  // Change product properties
  const handleSetProps = e => {
    setShowAlert(false);
    const newState = JSON.parse(JSON.stringify(props));
    newState[e.target.id] = e.target.value;
    setProps(newState);
  }

  // Download properties from API
  const handleDownloadData = () => {
    setShowAlert(false);
    if (props.pol && props.eng) {
      (async() => {
        try {
          setProps(await downloadProductData(props));
          setAlertType('DOWNLOADED_PRODUCT_DATA');
          setShowAlert(true);
        } catch(err) {
          setAlertType('NOT_DOWNLOADED_PRODUCT_DATA');
          setShowAlert(true);
        }
      })()
    }
  }

  // Show alert after event
  const alertFunction = type => {
    if (showAlert) {
      const {variant, closeFunction, heading, body} = ALERT_TYPES[type];
      return AlertComponent(variant, eval(closeFunction), heading, body)
    }
  }

  // Clear function
  const clear = () => {
    setProps(defaultProduct);
    setShowAlert(false);
  }

  const addNewProduct = () => {
    if (!props.eng || !props.pol || !props.category) {
      setAlertType('PRODUCT_INPUTS_ERROR');
    } else if (allProducts.filter(prod => prod.eng.toLowerCase() === props.eng.toLowerCase()).length){
      setAlertType('PRODUCT_EXIST_IN_STORE');
    } else {
      setAlertType('PRODUCT_ADD_TO_STORE');
      addProductToState(props);
      setProps(defaultProduct);
    }
    setShowAlert(true);
  }

  const inputs = () => {
    return Array.from(propertiesLangMap.keys()).map(prop => {
      return input(firstLetterUpperCase(propertiesLangMap.get(prop)), prop, 'number')
    })
  }

  const input = (POLname, ENGname, type) => {
    return (
      <div className="d-flex flex-column mt-2" key={ENGname}>
        <p className="mb-0">{POLname}</p>
        <input className="p-2" type={type} value={props[ENGname]} id={ENGname} onChange={handleSetProps}/>
      </div>
    )
  }

  return (
    <React.Fragment>
      <section className="page px-5 py-3">
        <h1 className="p-4">DODAJ PRODUKT</h1>
        <div className="d-flex justify-content-around">
          { input('Polska nazwa', 'pol', 'text') }
          { input('Angielska nazwa', 'eng', 'text') }

          <Form.Group>
            <Form.Label className="my-1 ms-1 fw-bold">Kategorie</Form.Label>
            <Form.Select name='category' className="ps-1 pe-0" id="category" onChange={handleSetProps}>
              <option value=""></option>
              {CATEGORIES.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </Form.Select>
          </Form.Group>
          
          <button className='btn btn-dark' onClick={handleDownloadData}>Pobierz właściwości</button>
        </div> 
        
        { inputs() }
        { alertFunction(alertType) }
        <div className="d-flex mt-2 justify-content-end">
          <button className="btn btn-primary me-2" onClick={addNewProduct}>DODAJ</button>
          <button className="btn btn-dark" onClick={clear}>WYCZYŚĆ</button>
        </div>
      </section>
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  return {
    allProducts : state.ProductsReducer.products,
  };
}


const mapDispatchToProps = dispatch => {
  return {
    addProductToState : product => {
      dispatch(addProduct(product));
    }
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);