import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
    <header className={styles.header}>

      <div>
        <h1>
          <span>
              Hello<span className={styles.yellowText}>.</span>
          </span>
          <br />
          <span>
            <span>I am</span>
          </span>
          <br />
          <span>Mikhel Chour</span>
        </h1>
      </div>
    </header>
    <section className={styles.infoSection}>
      <img
        src='/imagen-para-website.png'
        alt='Imagen'
        className={styles.image}
        />
      <div className={styles.infoContainer}>
        <span className={styles.title + " " + styles.yellowText}>Mikhel</span>
        <br/>
        <span className={styles.title}>Chour</span>
      </div>
      <div className={styles.list}>
        <ul>
          <li>
            <span className={styles.grayText}>Age: </span> 27
          </li>
          <li>
            <span className={styles.grayText}>Nationality: </span> German
          </li>
          <li>
            <span className={styles.grayText}>Skill set:</span> Project Management and Financial Performance
          </li>
          <li>
            <spam className={styles.grayText}>Lenguages: </spam> English, German
          </li>
        </ul>
      </div>
    </section>
  </main>

  );
}
