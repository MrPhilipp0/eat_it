import { BrowserRouter } from 'react-router-dom';

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routing from "./Components/Pages/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
