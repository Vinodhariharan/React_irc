import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import theme from '../../theme'; // Import your Material-UI theme
import { ThemeProvider } from '@mui/joy/styles';
import '../../assets/css/button.css';
import useCart from './useCart';


export default function ProductCard({
  key, 
  product
}) {

  const { addToCart } = useCart(); 
  const handleAddToCart = () => {
    addToCart(product);
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg', margin: '0 5px', borderRadius: '20px' }}>
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={product.imageSrc}
              srcSet={`${product.imageSrc} 2x`}
              loading="lazy"
              alt={product.title}
              key={key}  
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">Plant Type: {product.Type}</Typography>
          <Link
            href={`/products/${product.link}`}
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutward />}
          >
            {product.title} 
          </Link>
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              product.bloomTime && (
                <Chip component="span" size="sm" variant="soft" color="info">
                  Blooms in {product.bloomTime}
                </Chip>
              )
            }
          >
            {product.price} INR
          </Typography>
          {product.stock && ( // Only show stock if available
            <Typography level="body-xs">Only {product.stock} left!</Typography>
          )}
          <button onClick={handleAddToCart}>
            Add to Garden
          </button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
