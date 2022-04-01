// css
import styles from './App.module.css';

// component
import Title from './components/Title';
import Profile from './components/Profile';
import Image from './components/Image';


const App = () => {
  return (
    <main className={styles.App}>
      <Title />
      <Profile />
      <Image />
    </main>
  );
}

export default App;
