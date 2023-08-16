import {useState} from 'react';
import styles from './Button.module.css';
import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH3 from '../TitleH3/TitleH3';
import Text from '../Text/Text';
import Image from '../Image/Image';

function AddButton({onElementPick}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.addBtn}
        onClick={() => setVisible(!visible)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
            fill="#80CCF0"
          />
        </svg>
      </button>

      {visible && (
        <div className={styles.chooseElem}>
          <button
            type="button"
            className={styles.chooseElem_btn}
            onClick={() => {
              onElementPick(<TitleH1 />);
            }}>
            Заголовок H1
          </button>
          <button
            type="button"
            className={styles.chooseElem_btn}
            onClick={() => {
              onElementPick(<TitleH2 />);
            }}>
            Заголовок H2
          </button>
          <button
            type="button"
            className={styles.chooseElem_btn}
            onClick={() => {
              onElementPick(<TitleH3 />);
            }}>
            Заголовок H3
          </button>
          <button
            type="button"
            className={styles.chooseElem_btn}
            onClick={() => {
              onElementPick(<Text />);
            }}>
            Абзац текста
          </button>
          <button
            type="button"
            className={styles.chooseElem_btn}
            onClick={() => {
              onElementPick(<Image />);
            }}>
            Изображение
          </button>
        </div>
      )}
    </>
  );
}

export default AddButton;
