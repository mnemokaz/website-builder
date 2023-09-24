import {Fragment, useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './Image.module.css';
import photo from '../../assets/icons/photo.png';
import {useDispatch} from 'react-redux';
import {appSlice} from '../../store/reducer';

function Image(props) {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(props.text);
  const [link, setLink] = useState(photo);

  return (
    <>
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
            onClick={() => {
              dispatch(appSlice.actions.deleteComponentAction(props.id));
            }}
            src={trash}
            alt="delete"
            width="20"
            height="20"
          />
        )}
        <img
          className={styles.photo}
          src={link}
          alt="delete"
          width="20"
          height="20"
        />
      </div>
      {isOpen && (
        <div className={styles.imgUpload}>
          <p>Загрузите изображение</p>
          <input
            placeholder="Вставьте ссылку на изображение"
            type="url"
            className={styles.contentElement}
            onChange={e => setText(e.target.value)}></input>
          <label
            className={styles.imgUploadLabel}
            onClick={() => {
              setLink(text);
              setIsOpen(false);
            }}>
            Загрузить
          </label>
        </div>
      )}
    </>
  );
}

export default Image;
