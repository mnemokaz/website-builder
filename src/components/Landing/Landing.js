import styles from './Landing.module.css'


function Landing() {
  return (
    <div className={`${styles.layout} ${styles.layoutLanding}`}>
<header className={`${styles.header } ${styles.headerEmpty}`}>
    
<p className={styles.placeholder}>Header</p>
<button type="button" className={styles.addBtn}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z" fill="#80CCF0"/>
</svg>
</button>





<div className={styles.chooseElem}>
<button type="button" className={styles.chooseElem_btn}>Заголовок H1</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H2</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H3</button>
<button type="button" className={styles.chooseElem_btn}>Абзац текста</button>
<button type="button" className={styles.chooseElem_btn}>Изображение</button>
</div>

</header>


<div className={`${styles.content} ${styles.content_1} ${styles.contentEmpty}`}>
      <p className={styles.placeholder}>Content</p>
      <button type="button" className={styles.addBtn}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z" fill="#80CCF0"/>
</svg>
</button>

      <div className={styles.chooseElem}>
<button type="button" className={styles.chooseElem_btn}>Заголовок H1</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H2</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H3</button>
<button type="button" className={styles.chooseElem_btn}>Абзац текста</button>
<button type="button" className={styles.chooseElem_btn}>Изображение</button>
</div>

    </div>

    <footer className={`${styles.footer} ${styles.footerEmpty}`}>
<p className={styles.placeholder}>Footer</p>
<button type="button" className={styles.addBtn}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z" fill="#80CCF0"/>
</svg>
</button>

<div className={styles.chooseElem}>
<button type="button" className={styles.chooseElem_btn}>Заголовок H1</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H2</button>
<button type="button" className={styles.chooseElem_btn}>Заголовок H3</button>
<button type="button" className={styles.chooseElem_btn}>Абзац текста</button>
<button type="button" className={styles.chooseElem_btn}>Изображение</button>
</div>

</footer>

  </div>


  )
}

export default Landing


