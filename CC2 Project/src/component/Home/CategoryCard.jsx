import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link } from '@mui/joy';


export default function GardenCategoryCard({ category, image, link, subtitle }) {
  return (
    <Card sx={{ minHeight: '280px', width: 420, margin: '20px' }}>
      <CardCover >
        <img
          src={image}
          srcSet={image + ' 2x'}
          loading="lazy"
          alt={category}
        />
      </CardCover>
      <CardCover sx={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
      }}
      />
      <CardContent sx={{ justifyContent: 'flex-end', color: '#fff' }}>
        {/* All elements within CardContent now inherit white color */}
        <Typography level="title-lg" sx={{ color: '#fff' }}>
          {category}
          {/* <FlowerIcon sx={{ margin: '0 0.5em', fontSize: '0.8em' }} /> */}
        </Typography>
        <Typography sx={{ color: '#fff' }}>{subtitle}</Typography>
        <Link href={link}>
          <button
            variant="outlined"
            color="primary"
            sx={{ marginTop: '1em', width: 200 }}
          >
        Shop Now
      </button>
      </Link>
    </CardContent>
    </Card >
  );
}

// Usage example
// const GardenCategoryCard = (
//   <GardenCategoryCard
//     category="Houseplants"
//     image="https://example.com/images/houseplants.jpg"
//     subtitle="Bring nature indoors with vibrant green friends."
//   />
// );
