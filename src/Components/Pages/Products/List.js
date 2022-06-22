import Category from "./Category";
import { CATEGORIES } from "../../../Redux/store/constans";

const List = ({PRODUCTS}) => {

  const categoriesList = CATEGORIES.map(cat => {
    const productsInCategory = PRODUCTS.filter(prod => prod.category === cat);
    return ({
      category: cat,
      objects: productsInCategory,
    })
  })


  return (
    <div className="d-flex flex-column pb-4">
      {categoriesList.map(e => <Category key={e.category} {...e}/>)}
    </div>
  );
}
 
export default List;