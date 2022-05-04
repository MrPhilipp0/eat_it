import ProductCategory from "./ProductCategory";

const ProductsList = ({PRODUCTS}) => {
  return (
    <div className="d-flex flex-column pb-4">
      {PRODUCTS.map(e => <ProductCategory key={e.category} {...e}/>)}
    </div>
  );
}
 
export default ProductsList;