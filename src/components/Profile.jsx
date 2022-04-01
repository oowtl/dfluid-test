import React, { useState, useEffect } from 'react';

const Profile = (props) => {

  const data = [{
    "src" : `${process.env.PUBLIC_URL}/images/girl.png`,
    "title" : 'Sed ut perspiciatis',
    "content" : 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.'
  },
  {
    "title" : "Lorem ipsum dolor",
    "content" : "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
  },
  {
    "title" : "Nemo enim ipsam",
    "content" : "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor."
  }];

  const shuffle = (data) => {
    
  };
  
  useEffect(() => {
    [...data].forEach(i => console.log(i));
  });
  
  const [cards, setCards] = useState(data);

  return (
    <div>
      1
    </div>
  )
};

export default Profile;