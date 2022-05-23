import axios from "axios";

export const fetchProducts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}?page=${pageParam}&limit=15`
  );
  return data;
};
export const fetchProductDetail = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/${id}`
  );
  return data;
};
