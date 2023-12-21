import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import products_tools from '../essentialGardenTools.js';
import products_flowers from '../flowers.js';
import products_trending from '../trendingPlant.js';
import ProductPage from "./ProductPage.jsx";
function getProductById(productSlug) {
   
  
  var p = products_tools.find((product) => product.link === productSlug);
  if(!p){
    p = products_flowers.find((product) => product.link === productSlug);
  }
  if(!p){
    p = products_trending.find((product) => product.link === productSlug);
  }
  return p; 
  }

function ProductDetails() {
    const { slug } = useParams();
    const product = getProductById(slug)
    console.log(slug)
  
    return (
        <ProductPage product={product}/>
    );
  }

  export default ProductDetails;