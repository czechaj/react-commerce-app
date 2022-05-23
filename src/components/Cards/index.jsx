import React from "react";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../api";
import Button from "../Button";
import { motion } from "framer-motion";
import { useBox } from "../../contexts/BoxContext";

function Cards() {
  const { addToBox, box } = useBox();
  const itemInBasket = (i) => {
    const res = box.find((product) => product.id === i.id);
    return res;
  };
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProducts, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup && lastGroup.length === 15;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });
  return status === "error" ? (
    "an error has occurred"
  ) : status === "loading" ? (
    <div className="loader"></div>
  ) : (
    <div>
      {data.pages.map((items, key) => (
        <main key={key}>
          {items.map((product) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              key={product.id}
              className="card"
            >
              <Link to={`/product/${product.id}`}>
                <h3>{product.title}</h3>
                <img loading={"eager"} src={product.image} alt="" />
                <p>{product.description.substring(0, 100)}...</p>
              </Link>
              <Button
                onClick={() => {
                  addToBox(product);
                }}
              >
                {itemInBasket(product) === undefined
                  ? "Add to box"
                  : "Remove from the box"}
              </Button>
            </motion.div>
          ))}
        </main>
      ))}
      <Button disabled={isFetching} onClick={fetchNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </Button>
    </div>
  );
}

export default Cards;
