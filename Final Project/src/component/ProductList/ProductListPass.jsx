import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./ProductList.jsx";

function getData(type) {
  return new Promise((res, rej) => {
    axios
      .get(`http://localhost:8000/${type}`)
      .then(function (response) {
        res(response.data);
      })
      .catch(function (error) {
        console.log(error);
        rej(error);
      });
  });
}

async function getProductDetails(slug) {
  try {
    const products = await getData(slug);
    return products;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}

function ProductDetails() {
  const { slug } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProductDetails(slug);
        setProducts(productsData);
      } catch (error) {
        // Handle error if needed
      }
    }

    fetchData();
  }, [slug]);

  if (products) {
    return <ProductList products={products} />;
  } else {
    return (
      <h1 style={{ textAlign: "center", marginTop: "30vh" }}>
        Webpage under development
      </h1>
    );
  }
}

export default ProductDetails;
