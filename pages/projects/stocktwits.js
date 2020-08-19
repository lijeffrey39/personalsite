import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'

const title = 'Stock Sentiment Analysis'

export default function Stocktwits() {
  return (<>
    <Layout projectcolor={'#daecff'}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>{title}</p>
          <p className={projectStyles.projectsubjumbotext}>
            Leverage the vast amount of user data stocktwits has to offer for predicting next-day stock movement.
          </p>
        </div>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumhighlighttext}>
        This was my first time in Europe and first spring break trip outside the US.
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