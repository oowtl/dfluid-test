import React from 'react';

import styles from './ImageBoxImage.module.css';

const ImageBoxImage = (props) => {
  const style = {
    backgroundImage: `url('${props.imageData}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }


  return (
    <img src={props.imageData} alt="" className={styles.ImageBoxImage}/>
  )
};

export default ImageBoxImage;