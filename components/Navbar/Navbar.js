import React from 'react'
import styles, { ul_container, nav_active } from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  const hamburgerHandler = () => {
    const ul = document.querySelector(`.${ul_container}`)
    ul.classList.toggle(`${nav_active}`)
  }
  return (
    <nav className={styles.container}>
      <div>
        <h1>Venkatesh</h1>
      </div>
      <ul className={styles.ul_container}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        {/* <li>
          <Link href='/contact'>Contact</Link>
        </li> */}
      </ul>
      <div className={styles.hamburger} onClick={hamburgerHandler}>
        <i className='fas fa-bars'></i>
      </div>
    </nav>
  )
}

export default Navbar
