import React from 'react';

import styles from './ImageBoxContentForm.module.css';

const ImageBoxContentForm = (props) => {
  return (
      <form className={styles.ImageBoxContentForm}>
        <label htmlFor="emailValidate">Subscribe to our newsletter</label>
        <div>
          <input placeholder="Enter your email" type="text" name="emailValidate"/>
          <i>
            <img src={`${process.env.PUBLIC_URL}/images/paper-plane.png`} alt="email-submit" />
          </i>
        </div>
      </form>
  );
};

export default ImageBoxContentForm;