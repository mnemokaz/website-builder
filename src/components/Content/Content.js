import React, {useState} from 'react';
import styles from './Content.module.css';
import AddButton from '../Button/Button';
import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH3 from '../TitleH3/TitleH3';
import Text from '../Text/Text';
import Image from '../Image/Image';

function Content(props) {
  const [isShown, setIsShown] = useState(null);
  const [components, setComponents] = useState([]);
  return (
    <>
      <div
        className={`${styles.content} ${styles.content_1} ${styles.contentEmpty}`}
        onMouseEnter={() => setIsShown(1)}
        onMouseLeave={() => setIsShown(null)}>
        {isShown === 1 && (
          <AddButton
            onElementPick={comp => {
              setComponents([...components, comp]);
              setIsShown(null);
            }}
          />
        )}

        {!components.length && <p className={styles.placeholder}>Content</p>}
        {components}
      </div>
      {props.amount > 1 && (
        <div
          className={`${styles.content} ${styles.content_2} ${styles.contentEmpty}`}
          onMouseEnter={() => setIsShown(2)}
          onMouseLeave={() => setIsShown(null)}>
          {isShown === 2 && (
            <AddButton
              onElementPick={comp => {
                setComponents([...components, comp]);
                setIsShown(null);
              }}
            />
          )}
          {!components.length && <p className={styles.placeholder}>Content</p>}
        </div>
      )}
      {props.amount > 2 && (
        <div
          className={`${styles.content} ${styles.content_3} ${styles.contentEmpty}`}
          onMouseEnter={() => setIsShown(3)}
          onMouseLeave={() => setIsShown(null)}>
          {isShown === 3 && (
            <AddButton
              onElementPick={comp => {
                setComponents([...components, comp]);
                setIsShown(null);
              }}
            />
          )}
          {!components.length && <p className={styles.placeholder}>Content</p>}
        </div>
      )}
    </>
  );
}
export default Content;
