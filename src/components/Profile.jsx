import React, { useState, useEffect } from 'react';

import ProfileCard from './ProfileCard';

import styles from './Profile.module.css'

const Profile = (props) => {

  const data = [
    {
      "src" : `${process.env.PUBLIC_URL}/images/girl.png`,
      "title" : 'Sed ut perspiciatis',
      "content" : 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
    },
    {
      "src" : `${process.env.PUBLIC_URL}/images/man.png`,
      
      "title" : "Lorem ipsum dolor",
      "content" : "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
      "src" : `${process.env.PUBLIC_URL}/images/cat.png`,
      "title" : "Nemo enim ipsam",
      "content" : "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor."
    }
  ];

  const shuffle = (data) => {
    const array = [];
    const d = [...data];
    for (let index = 0; index < 3; index++) {
      const random = d.splice(Math.floor(Math.random() * d.length), 1)[0]
      array.push(random);      
    }
    return array
  };
  
  const [cards, setCards] = useState(shuffle(data));

  return (
    <ul className={styles.Cards}>
      {cards.map(data => {
        return (
          <ProfileCard key={data.title} item={data}/> 
        )
      })}
    </ul>
  )
};

export default Profile;