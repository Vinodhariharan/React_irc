import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import itemData from '../trendingPlant';
import itemData1 from '../flowers';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData1.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.imageSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageSrc}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}