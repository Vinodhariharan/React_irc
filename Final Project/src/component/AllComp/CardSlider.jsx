import Slick from 'react-slick';
import ProductCard from './CardComponent';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function ProductCardSlider({ products }) {
    console.log()

    const CustomPrevArrow = (props) => (
        <ArrowBack
            className="slick-arrow slick-prev"
            style={{ color: 'black' }} // Set the arrow color to black
            onClick={props.onClick}
        />
    );

    const CustomNextArrow = (props) => (
        <ArrowForward
            className="slick-arrow slick-next"
            style={{ color: 'black' }} // Set the arrow color to black
            onClick={props.onClick}
        />
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    

    return (
        <div className="card-slider" style={{
            marginBottom: '30px'
        }}>
            <Slick {...settings}>
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id || index}
                        product={product}
                    />
                ))}
            </Slick>
        </div>
    );
}

export default ProductCardSlider;