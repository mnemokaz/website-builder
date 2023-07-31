import {useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './TitleH2.module.css';

function TitleH2() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: 'relative',
        border: isHover ? 'solid' : 'none',
      }}>
      {isHover && (
        <img
          className={styles.trash}
          src={trash}
          alt="delete"
          width="20"
          height="20"
        />
      )}
      <h1 className={styles.contentElement}>Заголовок H2</h1>
    </div>
  );
}

export default TitleH2;
