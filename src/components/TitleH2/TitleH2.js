import {useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './TitleH2.module.css';

function TitleH2() {
  const [isHover, setIsHover] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [text, setText] = useState('Заголовок H2');

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
        <h2
          className={styles.contentElement}
          onClick={() => {
            setIsShowInput(true);
            setText(text === 'Заголовок H2' ? '' : text);
          }}>
          {text}
        </h2>
      )}
    </div>
  );
}

export default TitleH2;
