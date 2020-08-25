import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'
import ProgressBar from "react-scroll-progress-bar"; 

const title = 'Covaid'

export default function Covaid() {
  return (<>
    <Layout projectcolor={'#FFEFEF'}>
      <Head>
        <title>{title}</title>
      </Head>
      <ProgressBar/>
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>{title}</p>
          <p className={projectStyles.projectsubjumbotext}>
            A mutual aid platform that connects community volunteers with those who need support.
          </p>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='https://github.com/Covaid-co'>
            Github
          </a><br/>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='https://covaid.co'>
            Live Site
          </a>
        </div>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumhighlighttext}>
        While stuck in quarentine during the COVID-19 pandemic, my friend and I decided to
        work on something to help others in need. 
      </p>
      <p className={photoStyles.albumtext}>
        The idea first started when we saw mutual aid groups around us 
        appear in response to the pandemic; I had no idea what 
        mutual aid even was or what it meant. After some more research, we learned that these
        groups were voluntarily organized by local communities aimed at helping and caring for those in need. 
        These efforts were immensely inspiring, seeing how our local communities were stepping up to help 
        one another during these difficult times. We began to look further into this concept and 
        found that many cities had also formed mutual aid groups, many with hundreds of volunteers ready to help 
        elderly and immunocompromised people. However, we noticed these organizations utilized 
        unwieldy spreadsheets to manage their volunteers and requests of help. 
      </p>
      <div className={photoStyles.photo}>
        <img src={'/images/covaid1.png'} className={photoStyles.photoreal}/>
      </div>
      <p className={photoStyles.albumtext}>
        So, wanting to play our part, 
        we built Covaid: a platform to manage and coordinate mutual aid efforts by connecting community volunteers
        with those in need.
      </p>
      <p className={photoStyles.albumtext}> 
        On the platform, volunteers sign up as part of a specific organization 
        (<a href='https://www.pittsburghmutualaid.com/'>Pittsburgh Mutual Aid</a>) or 
        independently if one oesn’t exist in their area. They can create offers of help with tasks such 
        as grocery delivery or medication pickup. Those in need can then submit a request for support, 
        after which Covaid will match them with the nearest volunteers. Through this platform, we hoped to
        make needs-matching easier for organizations so that they could dedicate more time to connecting
        with their community. At the same time, we also hoped to make it much easier and more accessible for 
        people in need to get support. Ultimately, in building this, we hoped a tool like this would give 
        people’s kindness and generosity a platform to create change.
      </p>
      <div className={photoStyles.photo}>
        <img src={'/images/covaid2.png'} className={photoStyles.photoreal}/>
      </div>
      {/* <p className={photoStyles.albumtext}>
        As we continued to grow the platform, our main goal was connecting with other mutual aid groups.
      </p> */}
    </div>
  </>)
}