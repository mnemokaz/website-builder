import React, {useState} from 'react';
import styles from './Header.module.css';
import AddButton from '../Button/Button';
import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH3 from '../TitleH3/TitleH3';
import Text from '../Text/Text';
import Image from '../Image/Image';
import {useDispatch, useSelector} from 'react-redux';
import {appSlice} from '../../store/reducer';
import {selectHeader} from '../../store/selectors';

function Header(props) {
  const dispatch = useDispatch();
  const components = useSelector(selectHeader);
  const [isShown, setIsShown] = useState(false);

  return (
    <header
      className={`${styles.header} ${styles.headerEmpty}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && (
        <AddButton
          onElementPick={elem => {
            dispatch(appSlice.actions.addHeaderComponentAction(elem));
            setIsShown(false);
          }}
        />
      )}
      {!components.length && <p className={styles.placeholder}>Header</p>}

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

      {/* <TitleH1 />
      <TitleH2 />
      <TitleH3 />
      <Text />
      <Image /> */}
    </header>
  );
}

export default Header;
