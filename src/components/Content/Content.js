import {useState} from 'react';
import styles from './Content.module.css';
import AddButton from '../Button/Button';

function Content(props) {
  const [isShown, setIsShown] = useState(null);
  return (
    <>
      <div
        className={`${styles.content} ${styles.content_1} ${styles.contentEmpty}`}
        onMouseEnter={() => setIsShown(1)}
        onMouseLeave={() => setIsShown(null)}>
        {isShown === 1 && <AddButton />}
        <p className={styles.placeholder}>Content</p>
      </div>
      {props.amount > 1 && (
        <div
          className={`${styles.content} ${styles.content_2} ${styles.contentEmpty}`}
          onMouseEnter={() => setIsShown(2)}
          onMouseLeave={() => setIsShown(null)}>
          {isShown === 2 && <AddButton />}
          <p className={styles.placeholder}>Content</p>
        </div>
      )}
      {props.amount > 2 && (
        <div
          className={`${styles.content} ${styles.content_3} ${styles.contentEmpty}`}
          onMouseEnter={() => setIsShown(3)}
          onMouseLeave={() => setIsShown(null)}>
          {isShown === 3 && <AddButton />}
          <p className={styles.placeholder}>Content</p>
        </div>
      )}
    </>
  );
}
export default Content;
