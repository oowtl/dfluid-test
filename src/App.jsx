// react 
import { useEffect, useState } from 'react';
// css
import styles from './App.module.css';

// component
import Title from './components/Title';
import Profile from './components/Profile';
import ImageBox from './components/ImageBox';

// etc
import axios from 'axios';

const App = () => {
  const [imgUrls, setImgUrls] = useState({});

  const pullImage = () => {
    const local = localStorage.getItem('imgUrl');
    if (local) {
      setImgUrls(local);
    } else {
      axios.get(
        `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      .then(({data}) => {
        setImgUrls(data.urls.full);
        localStorage.setItem('imgUrl', data.urls.full);
      })
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    pullImage();
  })

  return (
    <main className={styles.App}>
      <Title />
      <Profile />
      <ImageBox imageData={imgUrls}/>
    </main>
  );
}

export default App;
