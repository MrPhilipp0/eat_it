import { useState, useRef } from 'react';
import { downloadProductData } from './downloadData';
import { propertiesLangMap, firstLetterUpperCase } from '../../../../Redux/store/constans';

import { Modal } from 'react-bootstrap';

const ModalProductProps = ({state, handleShowProduct, product, handleUpdateProduct, handleDeleteProduct}) => {
  let productPropertiesREF = useRef(null);

  const [weight, setWeight] = useState(100);
  const handleSetWeight = e => setWeight(e.target.value);

  const [properties, setProperties] = useState(product);
  const handleSetProperties = props => setProperties(props);
  const handleSetOneProperty = e => {
    const newState = JSON.parse(JSON.stringify(properties));
    newState[e.target.id] = e.target.value;
    setProperties(newState);
  }

  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    if (!showDetails && !properties.hasOwnProperty('calories')) {
      (async() => {
        const prod = await downloadProductData(product); // download product properties from API
        await handleSetProperties(prod); // setState product properties 
        await handleUpdateProduct(prod); // save product in locale storage
        await setShowDetails(!showDetails); // show properties state
      })()
    } else {
      setShowDetails(!showDetails);
    }
  };

  const [editDetails, setEditDetails] = useState(false);

  const handleEditDetails = () => setEditDetails(!editDetails);

  const calculateProperties = prop => Math.round(prop * weight / 100);

  const handleOneProp = (POLname, ENGname) => {
    if (editDetails) {
      return (
        <div className="d-flex" key={ENGname}>
          <p className="calories me-1">{POLname} = </p>
          <input type="number" id={ENGname} value={calculateProperties(properties[ENGname])} onChange={handleSetOneProperty}></input>
        </div>
      )
    } else {
      return (
        <div className="d-flex" key={ENGname}>
          <p className="calories me-1">{POLname} = </p>
          <p>{calculateProperties(properties[ENGname])}</p>
        </div>
      )
    }
  }

  return (
    <Modal show={state} onHide={handleShowProduct}>
      <Modal.Header closeButton>
        <Modal.Title>
          {product.pol + " / " + product.eng}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-between'>
          <button className="btn btn-dark" onClick={handleShowDetails}>{showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}</button>
          <button className="btn btn-dark" onClick={handleEditDetails} disabled={!showDetails}>{editDetails ? "Zatwierdź" : "Edytuj"}</button>
          <button className="btn btn-dark" onClick={handleDeleteProduct}>Usuń produkt</button>
        </div>
        {
          showDetails && (
            <div className="mt-3" ref={productPropertiesREF}>
              <div className="d-flex">
                <p className="me-1">Waga (g/ml) =</p>
                <input type="number" value={weight} onChange={handleSetWeight} disabled={editDetails}></input>
              </div>
              {
                Array.from(propertiesLangMap.keys()).map(prop => handleOneProp(firstLetterUpperCase(propertiesLangMap.get(prop)), prop))
              }
            </div>
          )
        }
      </Modal.Body>
    </Modal>
  );
}

export default ModalProductProps;