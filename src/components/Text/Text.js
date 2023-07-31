import {useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './Text.module.css';

function Text() {
  const [isHover, setIsHover] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [text, setText] = useState('Абзац');

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: 'relative',
        border: isHover ? 'solid' : 'none',
        padding: '10px 0',
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

      {isShowInput ? (
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          autoFocus
          onBlur={() => {
            setIsShowInput(false);
          }}
        />
      ) : (
        <p
          className={styles.contentElement}
          onClick={() => {
            setIsShowInput(true);
            setText(text === 'Абзац' ? '' : text);
          }}>
          {text}
        </p>
      )}
    </div>
  );
}

export default Text;
