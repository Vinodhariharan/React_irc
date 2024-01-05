import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import theme from '../../theme'; // Import your Material-UI theme
import { ThemeProvider } from '@mui/joy/styles';
import '../../assets/css/button.css';
import { CartContext } from "./useCart.js";
import Autocomplete from '@mui/joy/Autocomplete';


export function CartCard({
    product
}) {

    const { cartItems, addToCart, removeFromCart } = React.useContext(CartContext);
    const handleAddToCart = () => {
        addToCart(product);
    }
    const handleRemove = () => {
        removeFromCart(product);
    }

    return (
        <ThemeProvider theme={theme}>
            <Card orientation="horizontal" sx={{ width: '100%', height: '200px', boxShadow: 'lg', margin: '0 5px', borderRadius: '0px' }}>
                <CardOverflow>
                    <AspectRatio ratio="1" sx={{ width: 200 }}>
                        <img
                            src={product.imageSrc}
                            srcSet={`${product.imageSrc} 2x`}
                            loading="lazy"
                            alt={product.title}
                            key={product.key}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="body-xs">Quantity: </Typography>
                    <Autocomplete
                        variant="soft"
                        placeholder="Soft variant"
                        value={product.quantity}
                        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        sx={{ width: 100 }}
                    />
                    <Link
                        href={`/products/${product.link}`}
                        fontWeight="md"
                        color="neutral"
                        textColor="text.primary"
                        overlay
                        endDecorator={<ArrowOutward />}
                    >
                        <Typography level="md">{product.title}</Typography>
                    </Link>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <Typography level="title-lg" sx={{ mt: 1, fontWeight: 'xl' }}>
                                {product.price * product.quantity} INR
                            </Typography>
                            <Typography level="body-xs">{product.stock ? `Only ${product.stock} left!` : 'Available'}</Typography>
                        </div>
                        <Button
                            style={{ backgroundColor: 'red', height: '40px', borderRadius: '20px', alignSelf: 'flex-end' }}
                            onClick={handleRemove}
                        >
                            Remove
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
