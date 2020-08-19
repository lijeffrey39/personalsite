import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import projectStyles from '../styles/projects.module.css'

const projects = [
  {
    'name': 'Covaid',
    'year': '2020',
    'url': '/projects/covaid',
    'imageurl': '/images/projects/covaid.png',
    'color': '#FFEFEF',
    'desc': 'Covaid is a mutual aid platform that connects community volunteers with those who need support.'
  },
  {
    'name': 'Stock Sentiment Analysis',
    'year': '2020',
    'url': '/projects/stocktwits',
    'imageurl': '/images/projects/stocktwits.png',
    'color': '#daecff',
    'desc': 'Leverage the vast amount of user data stocktwits has to offer for predicting next-day stock movement.'
  },
  {
    'name': 'Caprice',
    'year': '2020',
    'url': '/projects/caprice',
    'imageurl': '/images/projects/caprice.png',
    'color': '#ffe5ae',
    'desc': 'Caprice is a three-part motion controlled synthesizer comprised of a smartphone, laptop, and VR controller.'
  },
  {
    'name': 'Po-Shen Loh',
    'year': '2019',
    'url': '/projects/poshen',
    'imageurl': '/images/projects/poshen.png',
    'color': '#d9f0eb',
    'desc': 'Created Po-Shen Loh’s personal website to highlight his new discovery with the quadratic formula.'
  },
  {
    'name': 'HQ Bot',
    'year': '2018',
    'url': '/projects/hqbot',
    'imageurl': '/images/projects/hqbot.png',
    'color': '#f2f2f2',
    'desc': 'A bot to answer HQ trivia questions on the fly by finding and choosing the best choice based on the question.'
  }
]

export default function Projects() {
  return (
    <Layout projects>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Projects</p>
        <p className={utilStyles.subjumbotrontext} style={{marginTop: -12}}>random things I’ve worked on</p>
      </div>
      <div className={projectStyles.projectcontainer}>
        {projects.map((project) => {
          return (
            <div className={projectStyles.project}>
              <Link href={project.url}>
                <div className={projectStyles.projectbackground} style={{backgroundColor: project.color}}>
                  <img src={project.imageurl} className={projectStyles.projectimage}/>
                </div>
              </Link>
              <Link href={project.url}>
                <p className={projectStyles.projectname}>
                  {project.name} <font style={{fontWeight: 400, color: '#606060'}}> | {project.year}</font> <br/>
                </p>
              </Link>
              <p className={projectStyles.projectdesc}>
                {project.desc}
              </p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}