import React from 'react';

import ImageBoxImage from './ImageBoxImage';
import ImageBoxContent from './ImageBoxContent';

const Image = (props) => {
  return (
    <div style={{position: "relative"}}>
      <ImageBoxImage />
      <ImageBoxContent />
    </div>
  )
};

export default Image;