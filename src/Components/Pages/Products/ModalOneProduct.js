import { useState, useRef } from 'react';
import { Modal } from 'react-bootstrap';

const API_KEY = '19yzIl1VTUeDcJ2lI+Vucg==gOeJidsoibjzCyny';

async function downloadDataProduct(product) {
  const query = product.eng;
  const settings = {
    method: 'GET',
    headers: {
      'X-Api-Key' : API_KEY,
    }
  }
  const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, settings);
  const data = await response.json();

  if (data.items.length) {
    const {calories, cholesterol_mg, fat_total_g, fiber_g, potassium_mg, protein_g, sodium_mg, sugar_g} = data.items[0];
    product.calories = calories;
    product.cholesterol = cholesterol_mg;
    product.fat = fat_total_g;
    product.fiber = fiber_g;
    product.potassium = potassium_mg;
    product.protein= protein_g;
    product.sodium = sodium_mg;
    product.sugar = sugar_g;

  } else {
    throw new Error('Download product error. Product not found!');
  }
}

const ModalOneProduct = ({state, handle, product}) => {
  const productProperties = product;
  let productPropertiesREF = useRef(null);

  const [weight, setWeight] = useState(100);
  const handleSetWeight = e => setWeight(e.target.value);

  const [properties, setProperties] = useState(product);
  const handleSetProperties = props => setProperties(props);

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    if (!showDetails) {
      (async() => {
        await downloadDataProduct(productProperties);
        await setShowDetails(!showDetails);
        await handleSetProperties(productProperties);
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
 
export default ModalOneProduct;