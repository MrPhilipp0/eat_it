import Nav from './Nav';
import './Header.css';

const MOBILE = document.body.clientWidth < 768 ? true : false;

const Header = () => {

  return (
    <div id="HeaderWrapper">

      <div id="Header">
        <div id="TitleIcon">EatIt</div>
        { !MOBILE && <Nav /> }
        <div id="UserInfo">
          <p className="m-0">Cześć,</p>
          <p className="m-0">Filip Kniwel</p>
        </div>
      </div>

      <div id="AddHeader">
        <div id="TextAddHeader">
          <p>Dodaj produkty...</p>
          <p>Stwórz przepis...</p>
          <p>Idź na zakupy...</p>
          <p>I zacznij gotować!</p>
        </div>
        <div>
          svg
        </div>
      </div>
      
    </div>
  );
}
 
export default Header;