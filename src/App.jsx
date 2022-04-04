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


  const http = axios.create({
    baseUR: '/',
    Accept: 'application/json',
    headers: { 'max-age': '43200' },
  })

  const pullImage = () => {
    http.get(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    )
    .then(({data}) => {
      if (data.urls.raw !== imgUrls.raw) {
        setImgUrls(data.urls);
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    // pullImage();
  })

  return (
    <main className={styles.App}>
      <Title />
      <Profile />
      <ImageBox />
      <button onClick={pullImage}>123</button>
    </main>
  );
}

export default App;
