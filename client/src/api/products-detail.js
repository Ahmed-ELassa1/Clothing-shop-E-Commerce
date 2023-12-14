import productsData from "../data/Products";

export const getProductData = (id) => {
  const selectedProduct = productsData?.find((product) => product.id == id);
  return selectedProduct;
};
