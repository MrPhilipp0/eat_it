const UseSearchProduct = (item, allProducts) => {

  if(item.length) {
    let productsArr = allProducts.map(categoryProducts => {
      const products = categoryProducts.objects;
      return {
        category: categoryProducts.category,
        objects: products.filter(product => product.pol.toLowerCase().includes(item) || product.eng.toLowerCase().includes(item)),
      }
    });

    productsArr = productsArr.filter(categoryProducts => categoryProducts.objects.length);

    return (productsArr);
  } else {
    return (allProducts);
  }
}

export default UseSearchProduct;