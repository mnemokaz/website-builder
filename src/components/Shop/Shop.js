import styles from './Shop.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import Content_1 from '../Content/Content';
import Content_2 from '../Content/Content';
import Content_3 from '../Content/Content';

function Shop() {
  return (
    <div className={`${styles.layout} ${styles.layoutShop}`}>
      <Header />
      <Content amount={3} />
      <Content_1 />
      <Content_2 />
      <Content_3 />

      <Footer />
    </div>
  );
}

export default Shop;
