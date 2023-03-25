
import  axios  from 'axios';


export const getProductData = async (id) => {
    const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    return data;
  };