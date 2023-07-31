import {useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './TitleH1.module.css';

function TitleH1() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: 'relative',
        border: isHover ? 'solid' : 'none',
      }}>
      {<img src={trash} alt="delete" width="20" height="20" />}
      <h1 className={styles.contentElement}>Заголовок H1</h1>
    </div>
  );
}

export default TitleH1;