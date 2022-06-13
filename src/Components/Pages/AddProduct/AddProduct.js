import React, { useState } from 'react';
import { downloadDataProduct } from '../Products/ModalProductProps';
import { Alert } from 'react-bootstrap';
import '../StylesPage.css';

const AddProduct = () => {

  const [props, setProps] = useState({
    eng: '',
    pol: '',
    calories: '',
    cholesterol: '',
    fat: '',
    fiber: '',
    potassium: '',
    protein: '',
    sodium: '',
    sugar: ''
  })

  const [showAlert, setShowAlert] = useState(false);
  const handleSetShowAlert = () => setShowAlert(!showAlert);

  const [alertType, setAlertType] = useState('');

  // Zmiana właściwości produktu
  const handleSetProps = e => {
    const newState = JSON.parse(JSON.stringify(props));
    newState[e.target.id] = e.target.value;
    setProps(newState);
  }

  // Pobranie właściwości z API
  const handleDownloadData = () => {
    if (props.pol && props.eng) {
      (async() => {
        try {
          setProps(await downloadDataProduct(props));
          setAlertType(true);
          handleSetShowAlert();
        } catch(err) {
          setAlertType(false);
          handleSetShowAlert();
        }
      })()
    }
  }

  // Funkcja z alertem czy pobrano właściwości poprawnie czy nie
  const alertFunction = flag => {
    if (showAlert) {
      if (!flag) {
        return (
          <Alert className="mt-3" variant="danger" onClose={handleSetShowAlert}>
            <Alert.Heading>O nie! :o</Alert.Heading>
            <p>
              Nie znaleziono takiego produktu. Sprawdź pisownie nazw i spróbuj ponownie :P
            </p>
          </Alert>
        )
      } else {
        return (
          <Alert className="mt-3" variant="success" onClose={handleSetShowAlert}>
            <Alert.Heading>Sukces!</Alert.Heading>
            <p>
              Poprawnie pobrano właściwości produktu. W razie potrzeby zastosuj zmiany wedle uznania.
            </p>
          </Alert>
        )
      }
    }
  }

  return (
    <React.Fragment>
      <section className="page px-5 py-3">
        <h1 className="p-4">DODAJ PRODUKT</h1>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column">
            <p>Polska nazwa</p>
            <input className="p-2" type="text" value={props.pol} id="pol" onChange={handleSetProps}/>
          </div>
          <div className="d-flex flex-column">
            <p>Angielska nazwa</p>
            <input className="p-2" type="text" value={props.eng} id="eng" onChange={handleSetProps}/>
          </div>
          <button className='btn btn-dark' onClick={handleDownloadData}>Pobierz właściwości</button>
        </div> 
        {
          alertFunction(alertType)
        }
        <div className="d-flex flex-column">
          <p>Kalorie</p>
          <input className="p-2" type="number" value={props.calories} id="calories" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Cholesterol</p>
          <input className="p-2" type="number" value={props.cholesterol} id="cholesterol" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Tłuszcze</p>
          <input className="p-2" type="number" value={props.fat} id="fat" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Błonnik</p>
          <input className="p-2" type="number" value={props.fiber} id="fiber" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Potas</p>
          <input className="p-2" type="number" value={props.potassium} id="potassium" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Białko</p>
          <input className="p-2" type="number" value={props.protein} id="protein" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Sód</p>
          <input className="p-2" type="number" value={props.sodium} id="sodium" onChange={handleSetProps}/>
        </div>
        <div className="d-flex flex-column">
          <p>Cukier</p>
          <input className="p-2" type="number" value={props.sugar} id="sugar" onChange={handleSetProps}/>
        </div>
      </section>
    </React.Fragment>
  );
}
 
export default AddProduct;