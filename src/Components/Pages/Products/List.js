import Category from "./Category";

const List = ({PRODUCTS}) => {
  return (
    <div className="d-flex flex-column pb-4">
      {PRODUCTS.map(e => <Category key={e.category} {...e}/>)}
    </div>
  );
}
 
export default List;