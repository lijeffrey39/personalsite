import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Fonts from '../Fonts'

export const siteTitle = 'Jeffrey Li'

export default function Layout({ children, home, photography, album, projects, projectcolor }) {
  const backgroundURL = `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) ), url('` + album + `')`;
  useEffect(() => {
    Fonts();
  }, []);

  const currNavbar = () => {
    if (album) {
      return (
        <div className={styles.navbar}>
          <Link href="/">
            <div>
              <p className={styles.brand} style={{color: 'white'}}>
                Jeffrey <font style={{color: 'white', fontWeight: 900}}>Li</font>
              </p>
              <p className={styles.brandmobile} style={{color: 'white'}}>
                J L
              </p>
            </div>
          </Link>
          <Link href="/projects">
            <p className={styles.navlink} style={{color: 'white'}}>
              projects
            </p>
          </Link>
          <Link href="/photography">
            <p className={styles.navlink} style={{color: 'white'}}>
              photos
            </p>
          </Link>
          <Link href="/travel">
            <p className={styles.navlink} style={{color: 'white', marginRight: 0}}>
              travel
            </p>
          </Link>
        </div>
      )
    } else {
      return (
        <div className={styles.navbar}>
          {!home ? (
            <Link href="/">
              <p className={styles.brand}>
                Jeffrey <font style={{fontWeight: 900}}>Li</font>
              </p>
            </Link>) : <></>}
          <Link href="/projects">
            <p className={styles.navlink}>
              projects
            </p>
          </Link>
          <Link href="/photography">
            <p className={styles.navlink}>
              photos
            </p>
          </Link>
          <Link href="/travel">
            <p className={styles.navlink} style={{marginRight: 0}}>
              travel
            </p>
          </Link>
        </div>
      )
    }
  }

  const backgroundStyle = () => {
    if (album) {
      return {backgroundImage: backgroundURL}
    } else if (projectcolor) {
      return {backgroundColor: projectcolor}
    } else {
      return {}
    }
  }

  return (
    <div className={album || projectcolor ? styles.photojumbobackground : {}} style={backgroundStyle()}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {currNavbar()}
      <main>{children}</main>
    </div>
  )
}