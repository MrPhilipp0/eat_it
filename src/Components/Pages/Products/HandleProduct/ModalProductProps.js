import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from '../../../../Redux/actions/productsActions';
import { downloadProductData } from './downloadData';

import { Modal } from 'react-bootstrap';

const ModalProductProps = ({state, handle, product, updateProductInState}) => {
  let productPropertiesREF = useRef(null);

  const [weight, setWeight] = useState(100);
  const handleSetWeight = e => setWeight(e.target.value);

  const [properties, setProperties] = useState(product);
  const handleSetProperties = props => setProperties(props);

  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    if (!showDetails && !properties.hasOwnProperty('calories')) {
      (async() => {
        const prod = await downloadProductData(product); // download product properties from API
        await handleSetProperties(prod); // setState product properties 
        await updateProductInState(prod); // save product in locale storage
        await setShowDetails(!showDetails); // show properties state
      })()
    } else {
      setShowDetails(!showDetails);
    }
  };
  
  const calculateProperties = prop => Math.round(prop * weight / 100);

  return (
    <Modal show={state} onHide={handle}>
      <Modal.Header closeButton>
        <Modal.Title>
          {product.pol + " / " + product.eng}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button className="btn btn-dark" onClick={handleShowDetails}>{showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}</button>
        {
          showDetails && (
            <div className="mt-3" ref={productPropertiesREF}>
              <div className="d-flex">
                <p className="me-1">Waga (g/ml) =</p>
                <input type="number" value={weight} onChange={handleSetWeight}></input>
              </div>
              <p className="calories">Kalorie (kcal) = {calculateProperties(properties.calories)}</p>
              <p className="protein">Białko (g) = {calculateProperties(properties.protein)}</p>
              <p className="sugar">Cukier (g) = {calculateProperties(properties.sugar)}</p>
              <p className="fat">Tłuszcze (g) = {calculateProperties(properties.fat)}</p>
              <p className="cholesterol">Cholesterol (mg) = {calculateProperties(properties.cholesterol)}</p>
              <p className="fiber">Błonnik (g) = {calculateProperties(properties.fiber)}</p>
              <p className="potassium">Potas (mg) = {calculateProperties(properties.potassium)}</p>
              <p className="sodium">Sód (mg) = {calculateProperties(properties.sodium)}</p>
            </div>
          )
        }
      </Modal.Body>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    updateProductInState : product => {
      dispatch(updateProduct(product))
    }
  }
}
export default connect(null, mapDispatchToProps)(ModalProductProps);