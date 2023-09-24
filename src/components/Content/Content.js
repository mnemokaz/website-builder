import React, {useState} from 'react';
import styles from './Content.module.css';
import AddButton from '../Button/Button';
import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH3 from '../TitleH3/TitleH3';
import Text from '../Text/Text';
import Image from '../Image/Image';
import {useDispatch, useSelector} from 'react-redux';
import {appSlice} from '../../store/reducer';
import {selectContent1} from '../../store/selectors';

function Content(props) {
  const dispatch = useDispatch();
  const components = useSelector(selectContent1);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        className={`${styles.content} ${styles.content_1} ${styles.contentEmpty}`}
        onMouseEnter={() => setIsShown(1)}
        onMouseLeave={() => setIsShown(null)}>
        {isShown === 1 && (
          <AddButton
            onElementPick={elem => {
              dispatch(appSlice.actions.addContent1ComponentAction(elem));
              setIsShown(false);
            }}
          />
        )}

        {!components.length && <p className={styles.placeholder}>Content</p>}
        {components.map(comp => {
          if (comp.type === 'titleH1')
            return <TitleH1 key={comp.id} text={comp.text} id={comp.id} />;
          if (comp.type === 'titleH2')
            return <TitleH2 key={comp.id} text={comp.text} id={comp.id} />;

          if (comp.type === 'titleH3')
            return <TitleH3 key={comp.id} text={comp.text} id={comp.id} />;

          if (comp.type === 'text')
            return <Text key={comp.id} text={comp.text} id={comp.id} />;
          if (comp.type === 'image')
            return <Image key={comp.id} text={comp.text} id={comp.id} />;
        })}
      </div>
      {props.amount > 1 && (
        <div
          className={`${styles.content} ${styles.content_2} ${styles.contentEmpty}`}
          onMouseEnter={() => setIsShown(2)}
          onMouseLeave={() => setIsShown(null)}>
          {isShown === 2 && (
            <AddButton
              onElementPick={comp => {
                //TODO dispatch
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
                //TODO dispatch
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
