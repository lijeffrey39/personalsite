import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Projects() {
    return (
      <Layout>
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={utilStyles.jumbotron}>
          <p className={utilStyles.jumbotrontext}>Projects</p>
          <p className={utilStyles.subjumbotrontext}>random things I’ve worked on</p>
        </div>
      </Layout>
    )
}