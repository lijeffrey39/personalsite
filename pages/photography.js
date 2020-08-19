import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const locations = [
  {
    'name': 'Japan',
    'year': '2020',
    'folder': 'japan',
    'url': '/photography/japan'
  },
  {
    'name': 'Iceland',
    'year': '2018',
    'folder': 'iceland',
    'url': '/photography/iceland'
  },
  {
    'name': 'Cherry Blossoms',
    'year': '2019',
    'folder': 'cherryblossoms',
    'url': '/photography/cherryblossoms'
  },
  {
    'name': 'Abandoned Exploration',
    'year': '2019',
    'folder': 'pitt_explore',
    'url': '/photography/pittexplore'
  }, 
  {
    'name': 'TEDx',
    'year': '2019',
    'folder': 'tedx',
    'url': '/photography/tedx'
  }, 
  {
    'name': 'NYC',
    'year': '2018',
    'folder': 'nyc2018',
    'url': '/photography/nyc'
  },
]

export default function Photography() {
  return (
    <Layout photography>
      <Head>
        <title>Photography</title>
      </Head>
      <div className={utilStyles.jumbotron}>
        <p className={utilStyles.jumbotrontext}>Photography</p>
        <p className={utilStyles.subjumbotrontext} style={{marginTop: -12}}>a collection of stories</p>
      </div>

      <div className={utilStyles.thumbnailcontainer}>
        {locations.map((location) => {
          const imgURL = "/images/" + location.folder + "/thumb.jpg";
          return (
            <div className={utilStyles.thumbnail}>
              <Link href={location.url}>
                <img src={imgURL} className={utilStyles.thumbnailreal} alt={location.name} />
              </Link>
              <Link href={location.url}>
                <p className={utilStyles.thumbnailname}>
                  {location.name} <font style={{fontWeight: 400, color: '#606060'}}>{location.year}</font>
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}