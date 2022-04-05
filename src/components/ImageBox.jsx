import React from 'react';

import ImageBoxImage from './ImageBoxImage';
import ImageBoxContent from './ImageBoxContent';

const Image = (props) => {
  return (
    <div style={{position: "relative"}}>
      <ImageBoxImage imageData={props.imageData}/>
      <ImageBoxContent />
    </div>
  )
};

export default Image;