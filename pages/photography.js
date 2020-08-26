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
    'name': 'Big Sur',
    'year': '2019',
    'folder': 'bigsur',
    'url': '/photography/bigsur'
  },
  {
    'name': 'Italy and Spain',
    'year': '2019',
    'folder': 'italyspain',
    'url': '/photography/italyspain'
  },
  {
    'name': 'Shenandoah',
    'year': '2020',
    'folder': 'shenandoah',
    'url': '/photography/shenandoah'
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
    'name': 'Lunar Gala: Ferox',
    'year': '2018',
    'folder': 'lgferox',
    'url': '/photography/lgferox'
  },
  {
    'name': 'DS: Trout',
    'year': '2019',
    'folder': 'dstrout',
    'url': '/photography/dstrout'
  },
  {
    'name': 'Abandoned Exploration',
    'year': '2019',
    'folder': 'pitt_explore',
    'url': '/photography/pittexplore'
  },
  {
    'name': '1000 Plus',
    'year': '2019',
    'folder': '1000plus',
    'url': '/photography/1000plus'
  },
  {
    'name': 'Bye John Kim',
    'year': '2020',
    'folder': 'byejohn',
    'url': '/photography/byejohn'
  }, 
  {
    'name': 'TEDx',
    'year': '2019',
    'folder': 'tedx',
    'url': '/photography/tedx'
  },
  {
    'name': 'Longwood Gardens',
    'year': '2017',
    'folder': 'longwood',
    'url': '/photography/longwood'
  },
  {
    'name': 'NYC',
    'year': '2018',
    'folder': 'nyc2018',
    'url': '/photography/nyc'
  },
  {
    'name': 'NYC',
    'year': '2017',
    'folder': 'nyc2017',
    'url': '/photography/nyc2017'
  },
  {
    'name': 'Greek Sing',
    'year': '2018',
    'folder': 'greeksing',
    'url': '/photography/greeksing'
  },
  {
    'name': 'Lunar Gala: Sonder',
    'year': '2017',
    'folder': 'lgsonder',
    'url': '/photography/lgsonder'
  }
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
                  {location.name} <font style={{fontWeight: 400, color: '#606060'}}> | {location.year}</font>
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}