import React from 'react'
import LayOut from '../components/LayOut/LayOut'
import styles from '../styles/About.module.css'
import Footer from '../components/Footer/Footer'
const aboutPage = () => {
  return (
    <LayOut>
      <main className={styles.about_container}>
        <div className={styles.about_img_container}>
          <img className={styles.about_img} src='/img/about.svg' alt='image' />
        </div>
        <div className={styles.about_info_container}>
          <h1>About Me</h1>
          <p>
            Hello, I am Venkatesh and I am a web developer. I spend most of my
            day, experimenting with HTML, CSS and JavaScript (and its endless
            list of frameworks). I enjoy coding and the challenge of learning
            something new everyday.
          </p>
          <div className={styles.skills_div}>
            <ul className={styles.skills_container}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>NODEJS</li>
              <li>NEXTJS</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </LayOut>
  )
}

export default aboutPage
