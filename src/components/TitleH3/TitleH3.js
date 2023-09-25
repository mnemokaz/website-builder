import {Fragment, useState} from 'react';
import trash from '../../assets/icons/trash.svg';
import styles from './TitleH3.module.css';
import {useDispatch} from 'react-redux';
import {appSlice} from '../../store/reducer';

function TitleH3(props) {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);
  const [text, setText] = useState(props.text);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: 'relative',
        border: isHover ? 'solid' : 'none',
        minHeight: 20,
        paddingTop: 6,
        paddingBottom: 6,
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
        <h3
          className={styles.contentElement}
          onClick={() => {
            setIsShowInput(true);
            setText(text === 'Заголовок H3' ? '' : text);
          }}>
          {text}
        </h3>
      )}
    </div>
  );
}

export default TitleH3;
