import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/store/store';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routing from "./Components/Pages/Routing";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routing />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
