import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const LayOut = ({ title, description, keywords, children }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'></meta>
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossorigin='anonymous'
        />
      </Head>
      {children}
    </>
  )
}
LayOut.defaultProps = {
  title: 'Portfolio | venkatesh',
  description: 'My protfolio website',
  keywords: 'website,protfolio',
}
export default LayOut
