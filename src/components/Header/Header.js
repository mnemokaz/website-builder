import React, {useState} from 'react';
import styles from './Header.module.css';
import AddButton from '../Button/Button';
import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH3 from '../TitleH3/TitleH3';
import Text from '../Text/Text';
import Image from '../Image/Image';

function Header(props) {
  const [isShown, setIsShown] = useState(false);
  const [components, setComponents] = useState([]);

  return (
    <header
      className={`${styles.header} ${styles.headerEmpty}`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && (
        <AddButton
          onElementPick={comp => {
            setComponents([...components, comp]);
            setIsShown(false);
          }}
        />
      )}
      {!components.length && <p className={styles.placeholder}>Header</p>}

      {components}

      {/* <TitleH1 />
      <TitleH2 />
      <TitleH3 />
      <Text />
      <Image /> */}
    </header>
  );
}

export default Header;
