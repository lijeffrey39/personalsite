import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Photography() {
  return (
    <Layout photography>
      <Head>
        <title>Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Photography</p>
        <p className={utilStyles.subjumbotrontext}>a collection of stories</p>
      </div>

      <div className={utilStyles.thumbnailcontainer}>
        <div className={utilStyles.thumbnail}>
          <Link href="/photography/iceland">
            <img
              src="/images/iceland_thumb.jpg"
              className={utilStyles.thumbnailreal}
              alt={'iceland'}
            />
          </Link>
          <p className={utilStyles.thumbnailname}>
            Iceland <font style={{fontWeight: 400, color: '#606060'}}>2018</font>
          </p>
        </div>
        <div className={utilStyles.thumbnail}>
          <img
            src="/images/iceland_thumb.jpg"
            className={utilStyles.thumbnailreal}
            alt={'iceland'}
          />
          <p className={utilStyles.thumbnailname}>
            Iceland <font style={{fontWeight: 400, color: '#606060'}}>2018</font>
          </p>
        </div><div className={utilStyles.thumbnail}>
          <img
            src="/images/iceland_thumb.jpg"
            className={utilStyles.thumbnailreal}
            alt={'iceland'}
          />
          <p className={utilStyles.thumbnailname}>
            Iceland <font style={{fontWeight: 400, color: '#606060'}}>2018</font>
          </p>
        </div>
        <div className={utilStyles.thumbnail}>
          <img
            src="/images/iceland_thumb.jpg"
            className={utilStyles.thumbnailreal}
            alt={'iceland'}
          />
          <p className={utilStyles.thumbnailname}>
            Iceland <font style={{fontWeight: 400, color: '#606060'}}>2018</font>
          </p>
        </div>
        <div className={utilStyles.thumbnail}>
          <img
            src="/images/iceland_thumb.jpg"
            className={utilStyles.thumbnailreal}
            alt={'iceland'}
          />
          <p className={utilStyles.thumbnailname}>
            Iceland <font style={{fontWeight: 400, color: '#606060'}}>2018</font>
          </p>
        </div>
      </div>
    </Layout>
  )
}