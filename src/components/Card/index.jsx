import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { motion } from "framer-motion";
import { useBox } from "../../contexts/BoxContext";

function Card({ product }) {
  const { addToBox, box } = useBox();
  const itemInBasket = box.find((item) => item.id === product.id);

  return (
    <motion.div whileHover={{ scale: 1.01 }} key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
        <img loading={"eager"} src={product.image} alt="" />
        <p>{product.description.substring(0, 100)}...</p>
        <span className="price"> ${product.price} </span>
      </Link>
      <Button
        primary={!itemInBasket}
        onClick={() => {
          addToBox(product, itemInBasket);
        }}
      >
        {!itemInBasket ? "Add to box" : "Remove from the box"}
      </Button>
    </motion.div>
  );
}

export default Card;
