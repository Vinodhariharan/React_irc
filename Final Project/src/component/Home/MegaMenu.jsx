// Import React
import React from 'react';
import '../../assets/css/MegaMenu.css'; // Make sure to import your CSS file
import { Container } from '@mui/material';

// Define your MegaMenu component
const MegaMenu = () => {
  return (
    <div className="wrapper">
      <Container>
      <nav>
            <div class="logo"><a href="#">Categories:</a></div>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <ul className="links">
            <li>
              <a href='/productList/trendingPlants' className="desktop-link">Plants</a>
              <input type="checkbox" id="show-plants" />
              <label htmlFor="show-plants">Plants</label>
              <ul>
                <li><a className='pagemaps' href='/productList/flowers'>Flowers</a></li>
                <li><a className='pagemaps' href='/productList/shrubs'>Shrubs</a></li>
                <li><a className='pagemaps' href='/productList/trees'>Trees</a></li>
                <li><a className='pagemaps' href='/productList/indoorPlants'>Indoor Plants</a></li>
                <li><a className='pagemaps' href='/productList/seeds'>Seeds (Flower, Vegetable, Herb)</a></li>
              </ul>
            </li>
            <li>
            <a href='/productList/tools' className="desktop-link">Tools</a>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">Tools</label>
              <ul>
                <li><a className='pagemaps' href='/productList/EssentialTools'>Essential Tools</a></li>
                <li><a className='pagemaps' href='/productList/HelpfulTools'>Helpful Tools</a></li>
                <li><a className='pagemaps' href='/productList/UsefulTools'>Useful Tools</a></li>
                {/* <li><a className='pagemaps' href='/productList'>Trowels</a></li>
                <li><a className='pagemaps' href='/productList'>Hoes</a></li> */}
              </ul>
            </li>
            <li>
              <a href='/productList/containers' className="desktop-link">Containers</a>
              <input type="checkbox" id="show-containers" />
              <label htmlFor="show-containers">Containers</label>
              <ul>
                {/* <li><a className='pagemaps' href='/productList'>Pots and Planters (Clay, Plastic, Hanging, Raised Beds)</a></li> */}
              </ul>
            </li>
            <li>
            <a href='/productList/fertilizers' className="desktop-link">Fertilizers</a>
              <input type="checkbox" id="show-soil-fertilizers" />
              <label htmlFor="show-soil-fertilizers">Soil and Fertilizers</label>
              {/* <ul>
                <li><a className='pagemaps' href='/productList'>Potting Mix</a></li>
                <li><a className='pagemaps' href='/productList'>Garden Soil</a></li>
                <li><a className='pagemaps' href='/productList'>Mulch</a></li>
                <li><a className='pagemaps' href='/productList'>Compost</a></li>
                <li><a className='pagemaps' href='/productList'>Fertilizers</a></li>
              </ul> */}
            </li>
            {/* Repeat the pattern for other categories */}
            {/* ... */}
          </ul>
        </div>
        {/* <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search"></i>
        </label> */}
        {/* <form action="#" className="search-box">
          <input type="text" placeholder="Type Something to Search..." required />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </form> */}
      </nav>
      </Container>

    </div>
  );
};

export default MegaMenu;
