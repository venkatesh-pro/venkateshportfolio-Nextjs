import styles from '../styles/Home.module.css'
import LayOut from '../components/LayOut/LayOut'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <LayOut>
      <main className={styles.container}>
        <div className={styles.info}>
          <h2>Hey_______________</h2>
          <h1>I AM VENKATESH</h1>
          <h3>I AM A WEB DEVELOPER</h3>
          <div>
            <button>Hire Me</button>
            <button>GET CV</button>
          </div>
        </div>
        <div>
          <div className={styles.container_img}>
            <img
              style={{ width: '100%' }}
              src='/img/banner-image.png'
              alt='image'
            />
          </div>
        </div>
      </main>
      <main className={styles.introduce_container}>
        <div>
          <div className={styles.intro_container_img}>
            <img
              style={{ width: '100%' }}
              src='/img/about-us.png'
              alt='image'
            />
          </div>
        </div>
        <div className={styles.introduce_info}>
          <h2>LET ME INTRODUCE MYSELF</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non id autem inventore velit voluptatem ipsam nulla omnis esse.
            Eligendi nihil iure alias, voluptatibus quaerat corporis, maxime
            ipsa quae totam reiciendis eius odit laborum accusamus
            necessitatibus aut minima quidem repellat!
          </p>
          <button>DOWNLOAD CV</button>
        </div>
      </main>
      <main className={styles.service_container}>
        <h2>SERVICES OFFERS</h2>
        <div>
          <div>
            <p className={styles.service_container_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              eaque obcaecati accusamus nihil! Neque.
            </p>
          </div>
          <div className={styles.service_card_container}>
            <div>
              <div className={styles.service_card_img_container}>
                <img src='/img/s1.png' alt='img' />
              </div>
              <h3>WEB DEVELOPER</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, cumque!
              </p>
            </div>
            <div>
              <div className={styles.service_card_img_container}>
                <img src='/img/s4.png' alt='img' />
              </div>
              <h3>SEO OPTIMIZE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, cumque!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </LayOut>
  )
}
