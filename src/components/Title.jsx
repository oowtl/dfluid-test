import React from 'react';

// css
import styles from './Title.module.css'

const Title = (props) => {

  return (
    <div className={styles.Title}>
      <span className={styles.TitleWord}>
        Snap photos and share like<br /> never before
      </span>
    </div>
  )
};

export default Title;