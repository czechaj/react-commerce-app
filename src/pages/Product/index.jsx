import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductDetail } from "../../api";
import { motion } from "framer-motion";
import { useBox } from "../../contexts/BoxContext";
import Button from "../../components/Button";
function Product() {
  const { box, addToBox } = useBox();

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

  const itemInBasket = box.find((item) => item.id === data.id);
  return (
    <motion.div
      animate={{ y: 20 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <article>
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
        <p> {data.description} </p>
        <span className="price"> ${data.price} </span>
        <Button
          onClick={() => {
            addToBox(data, itemInBasket);
          }}
          primary={!itemInBasket}
        >
          {itemInBasket ? "Remove from cart" : "Add to cart"}
        </Button>
      </article>
    </motion.div>
  );
}
export default Product;
