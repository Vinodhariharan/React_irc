import Slick from 'react-slick';
import ProductCard from './CardComponent';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function ProductCardSlider({ products }) {

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
        slidesToShow: 3,
        slidesToScroll: 3,
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
                        // imageSrc={product.imageSrc}
                        // title={product.title}
                        // price={product.price}
                        // stock={product.stock}
                        // // link={product.link}
                        // plantType={product.plantType}
                        // bloomTime={product.bloomTime}
                        product={product}
                    />
                ))}
            </Slick>
        </div>
    );
}

export default ProductCardSlider;