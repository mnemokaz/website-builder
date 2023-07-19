import {useState} from 'react';
import styles from './Header.module.css';
import AddButton from '../Button/Button';

function Header(props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <header
      className={`${styles.header} ${styles.headerEmpty}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <AddButton />}

      <p className={styles.placeholder}>Header</p>
    </header>
  );
}

export default Header;
