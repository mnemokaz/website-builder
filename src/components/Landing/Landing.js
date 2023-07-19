import AddButton from '../Button/Button';
import styles from './Landing.module.css';
import {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function Landing() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={`${styles.layout} ${styles.layoutLanding}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Landing;
