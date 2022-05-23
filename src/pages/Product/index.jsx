import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductDetail } from "../../api";
import { motion } from "framer-motion";

function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["products", id], () =>
    fetchProductDetail(id)
  );

  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return error.message;
  }

  return (
    <motion.div
      animate={{ y: 20 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <article>
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
        <p> {data.description} </p>
      </article>
    </motion.div>
  );
}
export default Product;
