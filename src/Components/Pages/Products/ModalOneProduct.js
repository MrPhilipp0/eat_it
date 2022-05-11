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
  const productsProperties = product;
  let productPropertiesREF = useRef(null);

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
    if (!productsProperties.calories) {
      (async() => {
        await downloadDataProduct(productsProperties);
        updateProductProperties();
      })()
    }
  };

  const updateProductProperties = () => {
    const properties = productPropertiesREF.current;
    const {calories, cholesterol, fat, fiber, potassium, protein, sodium, sugar} = productsProperties;
    properties.querySelector(".calories").innerText = `Kalorie (kcal) = ${calories}`;
    properties.querySelector(".cholesterol").innerText = `Cholesterol (mg) = ${cholesterol}`;
    properties.querySelector(".fat").innerText = `Tłuszcze (g) = ${fat}`;
    properties.querySelector(".fiber").innerText = `Błonnik (g) = ${fiber}`;
    properties.querySelector(".potassium").innerText = `Potas (mg) = ${potassium}`;
    properties.querySelector(".protein").innerText = `Białko (g) = ${protein}`;
    properties.querySelector(".sodium").innerText = `Sód (mg) = ${sodium}`;
    properties.querySelector(".sugar").innerText = `Cukier (g) = ${sugar}`;
  }

  return (
    <Modal show={state} onHide={handle}>
      <Modal.Header closeButton>
        <Modal.Title>
          {product.pol + " / " + product.eng}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={handleShowDetails}>{showDetails ? "Ukryj szczegóły" : "Pokaż szczegóły"}</button>
        {
          showDetails && (
            <div className="mt-3" ref={productPropertiesREF}>
              <p>Waga = 100g</p>
              <p className="calories">Kalorie (kcal) = {productsProperties.calories}</p>
              <p className="cholesterol">Cholesterol (mg) = {productsProperties.cholesterol}</p>
              <p className="fat">Tłuszcze (g) = {productsProperties.fat}</p>
              <p className="fiber">Błonnik (g) = {productsProperties.fiber}</p>
              <p className="potassium">Potas (mg) = {productsProperties.potassium}</p>
              <p className="protein">Białko (g) = {productsProperties.protein}</p>
              <p className="sodium">Sód (mg) = {productsProperties.sodium}</p>
              <p className="sugar">Cukier (g) = {productsProperties.sugar}</p>
            </div>
          )
        }
      </Modal.Body>
    </Modal>
  );
}
 
export default ModalOneProduct;