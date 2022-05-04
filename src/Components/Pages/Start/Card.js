import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BACKGROUND_COLORS = ['#E1C2FF', '#FFC2C2', '#C1FEC0', '#B0C1FE'];
const LINK_PATHNAMES = ['/', '/products', '/recipes', '/shoplist']

const Card = ({title, description, svg, index}) => {

  const styleCard = {
    backgroundColor: BACKGROUND_COLORS[index],
    boxShadow: '3px 2px 8px black',
    borderRadius: '5px',
  }

  if (!(index%2)) {
    return (
      <Link to={LINK_PATHNAMES[index]} className='link'>
        <div className="d-flex my-5" style={styleCard}>
          <Col xs={6} className="p-3">
            <h5>{title}</h5>
            <p>{description}</p>
          </Col>
          <Col xs={6} className="p-3">
            {svg}
          </Col>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to={LINK_PATHNAMES[index]} className='link'>
        <div className="d-flex my-5" style={styleCard}>
          <Col xs={6} className="p-3">
            {svg}
          </Col>
          <Col xs={6} className="p-3">
            <h5>{title}</h5>
            <p>{description}</p>
          </Col>
        </div>
      </Link>
    )
  }
}
 
export default Card;