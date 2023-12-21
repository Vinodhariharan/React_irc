

import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextField,
  Grid,
} from '@mui/material';
import ProductCard from '../AllComp/CardComponent';
// import products from '../flowers';

export default function ProductList(pro) {
  const products = pro.products;
  // const products = this.products;
  const [selectedType, setSelectedType] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const filteredProducts = products.filter((product) => {
    const priceInRange = (minPrice===null || product.price >= minPrice) && product.price <= maxPrice;
    const TypeMatch = !selectedType || product.Type === selectedType || selectedType === 'All';
    return priceInRange && TypeMatch;
  });

  //const filteredProducts = products;
  

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(parseFloat(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseFloat(event.target.value));
  };

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 2,
          }}
        >
          {/* Plant type filter */}
          <FormControl sx={{ marginRight: 2 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={selectedType}
              onChange={handleTypeChange}
            >
              <MenuItem value="All">All</MenuItem>
              {/* Add options for each plant type you want to filter by */}
              {Object.keys(products.reduce((acc, product) => {
                acc[product.Type] = true;
                return acc;
              }, {})).map((Type) => (
                <MenuItem key={Type} value={Type}>
                  {Type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Price range filter */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl sx={{ marginRight: 10 }}>
              <InputLabel>Min price</InputLabel>
              <TextField
                type="number"
                min={0}
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <FormHelperText>$</FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel>Max price</InputLabel>
              <TextField
                type="number"
                min={minPrice} // Min price can't be higher than max price
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              <FormHelperText>€</FormHelperText>
            </FormControl>
          </Box>
        </Box>
      </Grid>
      {filteredProducts.map((product, index) => (
        <Grid item xs={3} key={index}>
          <ProductCard
            key={product.id || index}
            product={product}
            // imageSrc={product.imageSrc}
            // title={product.title}
            // price={product.price}
            // stock={product.stock}
            // // link={product.link}
            // Type={product.Type}
            // bloomTime={product.bloomTime}
          />
        </Grid>
      ))}
    </Grid>
  );
}
