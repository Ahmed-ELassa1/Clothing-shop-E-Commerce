import axios from "axios";

export const getProductData = async (id) => {
  const { data } = await axios.get(
    `${window.location.origin}/data/Products.json`
  );
  const selectedProduct = data?.find((product) => product.id == id);
  return selectedProduct;
};
