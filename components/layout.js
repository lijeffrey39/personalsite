import React, { useEffect } from 'react';
import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Fonts from '../Fonts'

const name = 'Your Name'
export const siteTitle = 'Jeffrey Li'

export default function Layout({ children, home, photography, album }) {
  useEffect(() => {
    Fonts()
  }, []);

  return (
    <div className={album ? styles.photojumbobackground : {}} style={album ? {backgroundImage: album} : {}}>
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
      {photography || album ? (
        <div className={styles.navbar}>
          <Link href="/">
            <p className={styles.brand}>
              Jeffrey <font style={{fontWeight: 400, color: '#606060'}}>Li</font>
            </p>
          </Link>
          <Link href="/projects">
            <p className={styles.navlink}>
              projects
            </p>
          </Link>
          <Link href="/travel">
            <p className={styles.navlink} style={{marginRight: 0}}>
              travel
            </p>
          </Link>
        </div>
      ) : 
      <div className={styles.navbar}>
        {!home ? (
          <Link href="/">
            <p className={styles.brand}>
              Jeffrey <font style={{fontWeight: 400, color: '#606060'}}>Li</font>
            </p>
          </Link>) : <></>}
        <Link href="/projects">
          <p className={styles.navlink}>
            projects
          </p>
        </Link>
        <Link href="/photography">
          <p className={styles.navlink}>
            photography
          </p>
        </Link>
        <Link href="/travel">
          <p className={styles.navlink} style={{marginRight: 0}}>
            travel
          </p>
        </Link>
      </div>}
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  )
}