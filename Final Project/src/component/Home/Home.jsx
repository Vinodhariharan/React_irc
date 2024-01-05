import React, { useContext } from 'react';
import '../../assets/css/Home.css'; // Import your styles
import CardSlider from '../AllComp/CardSlider';
import GardenCategoryCard from './CategoryCard';
import { DataContext } from '../Datas/DataContext';


const Home = () => {
  const { data } = useContext(DataContext); 
  console.log(data);


  return (
    <div className="home">


        <h1 style={{ marginBottom: "20px" }}>Trending Plants</h1>
        <CardSlider products={data["trendingPlants"]} />


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

        </div>


        <h1 style={{ marginBottom: "20px" }}>Flower</h1>
        <CardSlider products={data["flowers"]} />


        <h1 style={{ marginBottom: "20px" }}>Essential Garden Tools</h1>
        <CardSlider products={data["tools"]} />
  


        <div className='catbar'>
          <GardenCategoryCard
            category="Fertilizers"
            image={require("../../assets/images/fertilizers/all-purpose-fertilizer.jpg")}
            link="/productList/fertilizers"
            subtitle="Bring nature indoors with vibrant green friends."
          />
          <GardenCategoryCard
            category="Tools"
            image={require("../../assets/images/tools/garden-trowel.jpg")}
            link="/productList/tools"
            subtitle="Helping gardens giggle. Forged for flourish. Tools to make your garden grow."
          />
        </div>


        <h1 style={{ marginBottom: "20px" }}>Fertilizers</h1>
        <CardSlider products={data["fertilizers"]} />


    </div>
  );
};

export default Home;

// Add styles to Home.css


// Adjust styles as needed for spacing and card dimensions
