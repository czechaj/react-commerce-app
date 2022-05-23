import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../api";
import Button from "../../components/Button";
import Card from "../../components/Card";

function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery("products", fetchProducts, {
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
    <div className="cards">
      {data.pages.map((items, key) => (
        <main key={key}>
          {items.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </main>
      ))}
      <Button primary={hasNextPage} onClick={fetchNextPage}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </Button>
    </div>
  );
}

export default Home;
