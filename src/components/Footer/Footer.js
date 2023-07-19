import {useState} from 'react';
import styles from './Footer.module.css';
import AddButton from '../Button/Button';

function Footer(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <footer
      className={`${styles.footer} ${styles.footerEmpty}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <AddButton />}
      <p className={styles.placeholder}>Footer</p>
    </footer>
  );
}
export default Footer;
