import {useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './Image.module.css';
import photo from '../../assets/icons/photo.png';

function Image() {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        position: 'relative',
        border: isHover ? 'solid' : 'none',
        width: 300,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
      <img
        className={styles.photo}
        src={photo}
        alt="delete"
        width="20"
        height="20"
      />
      {isOpen && (
        <div className={styles.imgUpload}>
          <p>Загрузите изображение</p>
          <input
            placeholder="Вставьте ссылку на изображение"
            type="url"
            className={styles.contentElement}></input>
          <label className={styles.imgUploadLabel}>Загрузить</label>
        </div>
      )}
    </div>
  );
}

export default Image;
