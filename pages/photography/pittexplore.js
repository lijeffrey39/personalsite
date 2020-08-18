import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function PittExplore() {

  const [opened, setOpened] = useState(false);
  const openImage = () => {
    setOpened(true);
  }

  return (<>
    <Layout album={'/images/pitt_explore/back.jpg'}>
      <Head>
        <title>Abandoned Exploration</title>
      </Head>
      <div className={photoStyles.photojumbotext}>
        <p className={photoStyles.photorealtext}>Abandoned Exploration</p> 
        <p className={photoStyles.photosubtext}>August 2019</p>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={utilStyles.labelinfo}
        style={{fontSize: 30, fontWeight: 500, marginTop: 20, lineHeight: 1.2, color: '#292930'}}>
        After a quick reddit search of abandoned locations around Pittsburgh, I ended up here.
      </p>
      <p className={utilStyles.labelinfo} style={{lineHeight: 1.5}}>
        Not sketch at all.
      </p>
    </div>
    <div className={photoStyles.photoscontainer}>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/1.jpg"
          className={photoStyles.photoreal}
          onClick={openImage}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/2.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/3.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/4.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/5.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/6.jpg"
          className={photoStyles.photoreal}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/7.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
      <div className={photoStyles.photo}>
        <img
          src="/images/pitt_explore/8.jpg"
          className={photoStyles.photorealhalf}
        />
      </div>
    </div>
    <div style={opened ? {display: 'block'} : {display: 'none'}} className={photoStyles.overlay} onClick={() => setOpened(false)}>
      <img src="/images/iceland_back.jpg" className={photoStyles.photofull}>
      </img>
      <a href="javascript:void(0)" className={photoStyles.closebtn} onClick={() => setOpened(false)}>&times;</a>
    </div>
  </>)
}