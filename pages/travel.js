import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Travel() {
  return (
    <Layout>
      <Head>
        <title>Travel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Travel</p>
        <p className={utilStyles.subjumbotrontext}>a growing map of where I’ve been</p>
      </div>
    </Layout>
  )
}