import React from 'react';

import ImageBoxContentForm from './ImageBoxContentForm';

import styles from './ImageBoxContent.module.css';

const ImageBoxContent = (props) => {
  return (
    <article className={styles.ImageBoxContent}>
      <div className={styles.ImageBoxContentText}>
        <h2>Sed ut perspiciatis unde omnis</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        <div className={styles.Row}></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
      </div>
      <ImageBoxContentForm />
    </article>
  )
};

export default ImageBoxContent;