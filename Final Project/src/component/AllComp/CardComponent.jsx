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
import { Skeleton } from '@mui/material';
import '../../assets/css/button.css';
import { CartContext } from "./useCart.js";

export default function ProductCard({
  key,
  product
}) {
  const { cartItems, addToCart } = React.useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  }

  return (
    // <ThemeProvider theme={theme}>
    <Card sx={{ width: 260, maxWidth: '100%', boxShadow: 'lg', margin: '0 15px', borderRadius: '0px' }}>
      <CardOverflow>
        {product.imageSrc ? (
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={product.imageSrc}
              srcSet={`${product.imageSrc} 2x`}
              loading="lazy"
              alt={product.title}
              key={key}
            />
          </AspectRatio>
        ) : (
          // Display Skeleton for the image while loading
          <Skeleton variant="rectangular" width={200} height={150} />
        )}
      </CardOverflow>
      <CardContent>
        {product.Type ? (
          <Typography level="body-xs">Type: {product.Type}</Typography>
        ) : (
          // Display Skeleton for the Type while loading
          <Skeleton variant="text" width={100} height={20} />
        )}
        {product.title ? (
          <Link
            href={`/products/${product.link}`}
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutward />}
          >
            <Typography
              level="title-lg"
              sx={{
                mt: 1,
                fontWeight: 'xl',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
              endDecorator={
                product.bloomTime && (
                  <Chip component="span" size="sm" variant="soft" color="info">
                    Blooms in {product.bloomTime}
                  </Chip>
                )
              }
            >
              {product.title}
            </Typography>
          </Link>
        ) : (
          // Display Skeleton for the title while loading
          <Skeleton variant="text" width={150} height={20} />
        )}
        {product.price ? (
          <Typography
            level="title-lg"
            sx={{
              mt: 1,
              fontWeight: 'xl',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
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
        ) : (
          // Display Skeleton for the price while loading
          <Skeleton variant="text" width={80} height={20} />
        )}
        {product.stock ? (
          <Typography level="body-xs">Only {product.stock} left!</Typography>
        ) : (
          // Display Skeleton for the stock while loading
          <Typography level="body-xs">Available</Typography>
        )}

        <Button style={{ marginTop: '10px', borderRadius: '20px' }} onClick={handleAddToCart}>
          Add to Garden
        </Button>
      </CardContent>
    </Card>
    // </ThemeProvider>
  );
}
