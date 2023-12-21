import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasonryImageList from './ImageGrid';

// Replace with your product data source
const products = [
  { name: 'Vibrant Violet Verbena', description: 'Blooms with clusters of fragrant purple flowers...' },
  { name: 'Sunny Sunflower', description: 'Tall stalks with cheerful yellow blooms...' },
  { name: 'Emerald Evergreen Fern', description: 'Delicate fronds add life to shady corners...' },
  // ... add more products
];

function About() {
  return (
    <div className="about-page" style={{justifyContent:"center"}}>
      <h1 style={{fontSize:"60px", textAlign:"center", padding:"30px"}} >About The Plant Palette</h1>
      <p style={{fontSize:'20px', padding:"20px"}}>Welcome to The Plant Palette, where we believe your home is a blank canvas, and every pot, planter, and petal is a stroke of vibrant possibility. We're not just a garden store; we're your artistic accomplice, your leafy muse, your partner in transforming drab walls into living galleries.</p>
      <h1 style={{fontSize:"40px", padding:"10px"}} >Our Story:</h1>

<p style={{fontSize:'20px', padding:"20px"}}>Founded in 2012 by Vinayak Patel, The Plant Palette was born from a shared passion for greenery and a belief that bringing nature indoors wasn't just trendy, it was transformative. We started with a tiny cart at the local farmer's market, bursting with colorful succulents and sun-kissed herbs. Today, we've blossomed into a thriving haven for plant enthusiasts, curating a collection as diverse as your imagination.
</p>
      <h2>Discover the Joy of Gardening</h2>
      <MasonryImageList/>

<h1 style={{fontSize:"40px", padding:"10px"}} >More Than Just Foliage:</h1>

<p style={{fontSize:'30px', padding:"20px"}}>At The Plant Palette, we're not just about the leafy wonders. We're about the experience. We offer:</p>
<ul style={{ padding:'30px' , fontSize:'20px'}}>
<li style={{ padding:'10px'}} >A curated selection of plants: From low-maintenance air plants to conversation-starting cacti, we have the perfect green companion for every personality and lifestyle.</li>
<li style={{ padding:'10px'}}>Unique pots and planters: Ditch the boring terracotta! We specialize in hand-painted ceramics, funky macrame hangers, and sleek modern stands to set your greenery apart.</li>
<li style={{ padding:'10px'}}>Expert advice: Our team of plant whisperers is passionate about sharing their knowledge. Need help choosing the right light or troubleshooting a wilting bloom? We're always happy to lend a green thumb.</li>
<li style={{ padding:'10px'}}>Workshops and events: Learn the art of terrarium building, master macrame knots, or discover the secret language of orchids. We have a workshop for every plant parent's curiosity.</li>
</ul>

<h1 style={{fontSize:"60px", textAlign:"center", padding:"30px"}}>Cultivate Your Canvas with Nature's Hues - Start creating at The Plant Palette!</h1>
      
      <p style={{fontSize:"20px", textAlign:"center", padding:"30px"}}>
        Come visit us to explore our selection, get expert advice, and bring
        the beauty of nature to your home.
      </p>
      <Link to="/productList/flowers" className="explore-btn" >
        <button style={{width:"50%",marginLeft:"25%", marginBottom:"50px"}}>
        Explore Our Collection
        </button>
      </Link>
    </div>
  );
}

export default About;
