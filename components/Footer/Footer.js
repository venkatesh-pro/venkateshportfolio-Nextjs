import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <main className={styles.footer_container}>
      <div className={styles.footer_container1}>
        <h2>Follow me on</h2>
        <div className={styles.footer_socialIcon_container}>
          <div>
            <a
              href='https://www.instagram.com/venkatesh_crafty/'
              target='_blank'>
              <img src='/img/instagram.svg' style={{ width: '23px' }} alt='' />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/venkatesh_crafty/'
              target='_blank'>
              <img src='/img/facebook.svg' style={{ width: '23px' }} alt='' />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/venkatesh_crafty/'
              target='_blank'>
              <img src='/img/twitter.svg' style={{ width: '23px' }} alt='' />
            </a>
          </div>
        </div>
        <div className={styles.footer_container3}>
          <p className={styles.footer_container3_p2}>
            Copyright &#169; 2021 All Right Reserved
          </p>
        </div>
      </div>
    </main>
  )
}

export default Footer
