import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cards() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await axios(
      `${process.env.REACT_APP_BASE_ENDPOINT}?page=1&limit=10`
    );
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div className="card">
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default Cards;
