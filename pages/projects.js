import React, { useEffect, useState } from 'react'
import LayOut from '../components/LayOut/LayOut'
import { API_KEY } from '../config/api_key'
import styles from '../styles/Project.module.css'

const projectPage = () => {
  const [productData, setProductData] = useState([])
  const [optionValue, setOptionValue] = useState([
    'All',
    'React',
    'Nodejs',
    'Nextjs',
    'Python and Nodejs',
  ])
  const [selectValue, setSelectValue] = useState('All')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFunc = async () => {
      console.log({ selectValue })
      setLoading(true)
      const res = await fetch(
        `${API_KEY}${
          selectValue === 'React'
            ? '?categories=React'
            : selectValue === 'Nodejs'
            ? '?categories=Nodejs'
            : selectValue === 'Nextjs'
            ? '?categories=Nextjs'
            : selectValue === 'Python and Nodejs'
            ? '?categories=Python and Nodejs'
            : ''
        }`
      )

      const data = await res.json()
      setLoading(false)
      setProductData(data.data)
    }
    fetchFunc()
  }, [selectValue])
  console.log(productData)
  return (
    <LayOut>
      <div className={styles.projectHeader}>
        <h1>All Projects</h1>
        <h2>Filter By Course</h2>
        <div className={styles.selectContainer}>
          <select
            className={styles.select}
            name=''
            value={selectValue}
            id='slct'
            onChange={(e) => setSelectValue(e.target.value)}>
            {optionValue.map((val) => {
              return (
                <option key={val._id} value={val}>
                  {val}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          {productData.map((d) => {
            return (
              <div className={styles.container}>
                <div>
                  <div className={styles.img_container}>
                    <a href={d.projectPageLink} target='_blank'>
                      <img className={styles.img} src={d.image} alt='img' />
                    </a>
                  </div>

                  <div className={styles.name_container}>
                    <h2>{d.name}</h2>
                  </div>
                  <div className={styles.tags}>
                    {d.tags.map((tag) => {
                      return <div>{tag}</div>
                    })}
                  </div>
                </div>
                <div className={styles.card_footer}>
                  <i className='fab fa-github'></i>
                  <a
                    className={styles.sourceCodeLink}
                    href={d.sourceCode}
                    target='_blank'>
                    Source Code
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </LayOut>
  )
}

export default projectPage
