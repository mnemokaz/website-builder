import styles from './Menu.module.css'

function Menu({onClick}) {

  return (
 <form className={styles.container}>
        <h2 className={styles.header}>Выберите сетку сайта</h2>

       
        <div className={styles.button} onClick={() => onClick('landing')}>
          <span className={styles.text}>Лендинг</span>
          <svg className={styles.img} width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.3" width="239.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
        </div>


        <div className={styles.button} onClick={() => onClick('blog')}>
       
          <span className={styles.text}>Блог</span>
          <svg className={styles.img} width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.394" width="89.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="100.3" y="26.3" width="139.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
        </div>


        <div className={styles.button} onClick={() => onClick('shop')}>
          <span className={styles.text}>Магазин</span>
          <svg className={styles.img} width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="0.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="83.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
            <rect x="166.3" y="26.3" width="73.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5"/>
          </svg>
          </div>
        
 </form>
 
 
 )
  

}

export default Menu