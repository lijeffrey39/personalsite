import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'

const title = 'Covaid'

export default function Covaid() {
  return (<>
    <Layout projectcolor={'#FFEFEF'}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>Covaid</p>
          <p className={projectStyles.projectsubjumbotext} style={{marginTop: -10, maxWidth: 500}}>
           A mutual aid platform that connects community volunteers with those who need support.
          </p>
        </div>
        {/* <img src={"/images/projects/covaid.png"} className={projectStyles.jumboimage} /> */}
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