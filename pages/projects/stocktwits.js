import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'
import ProgressBar from "react-scroll-progress-bar"; 

const title = 'Stock Sentiment Analysis'

export default function Stocktwits() {
  return (<>
    <Layout projectcolor={'#daecff'}>
      <Head>
        <title>{title}</title>
      </Head>
      <ProgressBar
        // height="8"
        // bgcolor="#F43059"
        // duration="1"
      />
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>{title}</p>
          <p className={projectStyles.projectsubjumbotext}>
            Leveraging the user data stocktwits has to offer for predicting next-day stock movement.
          </p>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='https://github.com/lijeffrey39/stockAnalysis'>
            Github
          </a><br/>
          <a className={projectStyles.projectlink} href='https://lijeffrey39.gitbook.io/sentiment-ai/'>
            Documentation
          </a>
        </div>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumhighlighttext}>
        Have you ever wondered what stock to buy today? With so much news and information on the internet, who's telling the truth?
        Why was there no easy way to compile this data into someting useful.
      </p>
      <p className={photoStyles.albumtext}>
        This trip happened back in my sophomore year of college when we found out that tickets
        to Iceland were on going for way too cheap (After our trip, they quickly realized and stopped the deal). 
        For just $300, we booked a roundtrip ticket and were on our way. Luckily, I was inspired by Casey 
        Neistat at the time and happened to create a vlog of the trip.
      </p>
    </div>
  </>)
}