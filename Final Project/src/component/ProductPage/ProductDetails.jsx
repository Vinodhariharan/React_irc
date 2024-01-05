import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductPage from "./ProductPage.jsx";
import { useContext } from "react";
import { DataContext } from "../Datas/DataContext.jsx";

function getProductById(productSlug,data) {
  
  const allTypes = ['containers', 'flowers', 'tools', 'fertilizers', 'shrubs', 'trendingPlants','trees','indoorPlants']
  var pro;    
  for (let index = 0; index < allTypes.length; index++) {
    const element = allTypes[index];
    if(!pro){
      pro = data[element].find((product) => product.link === productSlug);
    }
    else{
      return pro
    }
  }
  return pro
  }

function ProductDetails() {
    const { slug } = useParams();
    const { data } = useContext(DataContext); 
    const product = getProductById(slug,data)

  
    return (
        <ProductPage product={product}/>
    );
  }

  export default ProductDetails;