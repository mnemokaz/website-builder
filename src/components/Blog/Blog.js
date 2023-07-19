import styles from './Blog.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

function Blog() {
  return (
    <div className={`${styles.layout} ${styles.layoutBlog}`}>
      <Header />
      <Content amount={2} />
      <Footer />
    </div>
  );
}

export default Blog;
