import React, { useEffect } from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Fonts from '../Fonts'

export default function Home() {
  useEffect(() => {
    Fonts()
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Jeffrey <font style={{fontWeight: 400, color: '#606060'}}>Li</font></p>
        <p className={utilStyles.subjumbotrontext}>software engineer. designer. photographer. based in new hampshire.</p>
      </div>
      <div className={utilStyles.content} style={{marginTop: 150}}>
        <div className={utilStyles.label}>
          <p className={utilStyles.labeltext}>
            about
          </p>
        </div>
        <div className={utilStyles.labelregion}>
          <p className={utilStyles.labelinfo}
            style={{fontSize: 30, fontWeight: 700, marginTop: 18, lineHeight: 1, color: '#292930'}}>
            I’m a software engineer at <a style={{color: '#F43329'}} href='http://getcruise.com'>Cruise</a> working on self driving cars 🚗
          </p>
          <p className={utilStyles.labelinfo}>
            I graduated from Carnegie Mellon University in May 2020 with a Bachelors in 
            Electrical and Computer Engineering. I’ve always had an interest in anything 
            computer related, but have recently been intrigued by the interestection of 
            technology and design. If I’m not behind a computer screen, you can probably 
            find me traveling, taking pictures, or making music.
          </p>
        </div>
      </div>
      <div className={utilStyles.content}>
        <div className={utilStyles.label}>
          <p className={utilStyles.labeltext} style={{color: '#83CBFF'}}>
            contact
          </p>
        </div>
        <div className={utilStyles.labelregion}>
          <p className={utilStyles.labelinfo}>
            484-238-8298 <br/>
            lijeffrey39@gmail.com
          </p>
        </div>
      </div>
      <div className={utilStyles.content} style={{marginBottom: 100}}>
        <div className={utilStyles.label}>
          <p className={utilStyles.labeltext} style={{color: '#59E499'}}>
            resume
          </p>
        </div>
        <div className={utilStyles.labelregion} style={{paddingTop: 18}}>
          <a className={utilStyles.labelinfo} 
            style={{textDecoration: 'underline', cursor: 'pointer'}} 
            href='/vercel.svg' download>
            jeffreyli_resume.pdf
          </a>
        </div>
      </div>
    </Layout>
  )
}