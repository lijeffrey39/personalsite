import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import projectStyles from '../styles/projects.module.css'

export default function Projects() {
  return (
    <Layout projects>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Projects</p>
        <p className={utilStyles.subjumbotrontext}>random things I’ve worked on</p>
      </div>
      <div className={projectStyles.projectcontainer}>
        <div className={projectStyles.project}>
          <Link href={'/projects/covaid'}>
            <div className={projectStyles.projectbackground} style={{backgroundColor: '#FFEFEF'}}>
              <img src={"/images/projects/covaid.png"} className={projectStyles.projectimage}/>
          </div>
          </Link>
          <p className={projectStyles.projectname}>
            Covaid <font style={{fontWeight: 400, color: '#606060'}}> | 2020</font> <br/>
          </p>
          <p className={projectStyles.projectdesc}>
            Covaid is a mutual aid platform that connects community volunteers with those who need support.
          </p>
        </div>
        <div className={projectStyles.project}>
          <div className={projectStyles.projectbackground} style={{backgroundColor: '#d9f0eb'}}>
            <img src={"/images/projects/poshen.png"} className={projectStyles.projectimage}/>
          </div>
          <p className={projectStyles.projectname}>
            Po-Shen Loh <font style={{fontWeight: 400, color: '#606060'}}> | 2019</font>
          </p>
          <p className={projectStyles.projectdesc}>
            Created Po-Shen Loh’s personal website to highlight his new discovery with the quadratic formula.
          </p>
        </div>
        <div className={projectStyles.project}>
          <div className={projectStyles.projectbackground}>
            <img src={"/images/projects/covaid.png"} className={projectStyles.projectimage}/>
          </div>
          <p className={projectStyles.projectname}>
            Covaid <font style={{fontWeight: 400, color: '#606060'}}>2020</font>
          </p>
        </div>
      </div>
    </Layout>
  )
}