import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import products_tools from '../essentialGardenTools.js';
import products_flowers from '../flowers.js';
import products_shrubs from '../shrubs.js';
import ProductList from "./ProductList.jsx";
function getProductsById(productSlug) {
  
    const productsMap = {
        "flowers": products_flowers,
        "tools": products_tools,
        "shrubs": products_shrubs,
      };
      const p = productsMap[productSlug];
  return p; 
  }


function ProductDetails() {
    const { slug } = useParams();
    const products = getProductsById(slug)
    if(products){
    return (
        <ProductList products={products}/>
    );}
    else{
        return (
            <h1>No Data Found</h1>
        );
    }
  }

  export default ProductDetails;