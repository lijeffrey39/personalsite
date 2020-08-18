import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function Iceland() {
  return (<>
    <Layout album={`linear-gradient( rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) ), url('/images/iceland_back.jpg')`}>
      <Head>
        <title>Iceland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={photoStyles.photojumbotron}>
        <p className={photoStyles.photojumbotext}>Iceland <font style={{fontWeight: 400}}>2018</font></p>
      </div>
    </Layout>
    <div className={utilStyles.labelregion}>
      <p className={utilStyles.labelinfo}
        style={{fontSize: 26, fontWeight: 700, marginTop: 18, lineHeight: 1, color: '#292930'}}>
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
  </>)
}