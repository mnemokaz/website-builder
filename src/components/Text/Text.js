import {Fragment, useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './Text.module.css';

function Text() {
  const [isHover, setIsHover] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [text, setText] = useState('Абзац');
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <Fragment />;

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
          onClick={() => {
            setIsRemoved(true);
          }}
          src={trash}
          alt="delete"
          width="20"
          height="20"
        />
      )}

      {isShowInput ? (
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
          onBlur={() => {
            setIsShowInput(false);
          }}
        />
      ) : (
        <h1
          className={styles.contentElement}
          onClick={() => {
            setIsShowInput(true);
            setText(text === 'Абзац' ? '' : text);
          }}>
          {text}
        </h1>
      )}
    </div>
  );
}

export default Text;
