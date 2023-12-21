import React from 'react';
import '../../assets/css/Home.css'; // Import your styles
import ImageSlider from '../AllComp/ImageCarosel'
import images from '../images';
import CardSlider from '../AllComp/CardSlider';
import GardenCategoryCard from './CategoryCard';
import flowers from '../flowers';

import trendingPlants from '../trendingPlant';
import essentialGardenTools from '../essentialGardenTools';


const Home = () => {

  return (
    <div className="home">
      <ImageSlider images={images} />

      <h1 style={{marginBottom:"20px"} }>Trending Plants</h1>
      <CardSlider products={trendingPlants}/>
<div className='catbar'>
      <GardenCategoryCard
    category="Indoor Plants"
    image="../../images/plants/calathea-orbifolia.jpg"
    link="/productList/flowers"
    subtitle="Bring nature indoors with vibrant green friends."
  />
  <GardenCategoryCard
    category="Outdoor Delight"
    image={require("../../assets/images/flowers/delphiniums.jpg")}
    link="/productList/shrubs"
    subtitle="Sunny celebrations, fragrant feasts, shady havens, or grow your own goodness."
  />
  
      <GardenCategoryCard
    category="Tools"
    image={require("../../assets/images/tools/garden-trowel.jpg")}
    link="/productList/tools"
    subtitle="Helping gardens giggle. Forged for flourish. Tools to make your garden grow."
  />
  </div>
      <h1 style={{marginBottom:"20px" } }>Flower</h1>
      <CardSlider products={flowers}/>

      <h1 style={{marginBottom:"20px"} }>Essential Garden Tools</h1>
      <CardSlider products={essentialGardenTools}/>

      {/* <ButtonBar/> */}

    </div>
  );
};

export default Home;

// Add styles to Home.css


// Adjust styles as needed for spacing and card dimensions
