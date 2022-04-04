import React from 'react';

// css
import styles from './Title.module.css'

const Title = (props) => {

  return (
    <div className={styles.Title}>
      <h1 className={styles.TitleWord}>
        Snap photos and share like<br /> never before
      </h1>
    </div>
  )
};

export default Title;