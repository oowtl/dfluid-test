import React from 'react';

import styles from './ProfileCard.module.css';

const ProfileCard = (props) => {

  return (
    <li className={styles.ProfileCard}>
      <img src={props.item.src} alt={props.item.title} />
      <span className={styles.ProfileCardTitle}>{props.item.title}</span>
      <span className={styles.ProfileCardContent}>{props.item.content}</span>
      <a className={styles.ProfileCardLink} href="#">LEARN MORE</a>
    </li>
  )
};

export default ProfileCard;