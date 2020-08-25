import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'
import ProgressBar from "react-scroll-progress-bar"; 

const title = 'Po-Shen Loh'

export default function Poshen() {
  return (<>
    <Layout projectcolor={'#d9f0eb'}>
      <Head>
        <title>{title}</title>
      </Head>
      <ProgressBar/>
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>{title}</p>
          <p className={projectStyles.projectsubjumbotext}>
            Po-Shen Loh’s personal site to highlight his new discovery with the quadratic formula.
          </p>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='https://www.poshenloh.com/'>
            Live Site
          </a>
        </div>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumhighlighttext}>
        Po-Shen Loh discovered a creative new way to solve quadratic equations. If you don't believe me watch the video.
      </p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZBalWWHYFQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className={photoStyles.albumtext}>
        I basically restructured his personal page to highlight this new discovery as well as other acheivements. 
        The site was built with React.js and hosted on AWS.
      </p>
    </div>
  </>)
}