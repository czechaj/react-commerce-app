import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});

  const fetchProductData = useCallback(async () => {
    const response = await axios(
      `${process.env.REACT_APP_BASE_ENDPOINT}/${id}`
    );
    setProductData(response.data);
  }, [id]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <div>
      <article>
        <h1>{productData.title}</h1>
        <img src={productData.image} alt="" />
        <p> {productData.description} </p>
      </article>
    </div>
  );
}
export default Product;
