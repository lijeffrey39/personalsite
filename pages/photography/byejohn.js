import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'

const images = [1, 2, 2, 2, 2, 1, 2, 2, 1] // sizes;
const title = 'Bye John Kim'
const date = 'May 2020'
const base_url = '/images/byejohn/';

export default function ByeJohn() {
  const [opened, setOpened] = useState(false);
  const [currImageNum, setCurrImageNum] = useState(1);
  const openImage = (imgURL) => {
    setOpened(true);
    setCurrImageNum(imgURL);
  }

  const moveRight = () => {
    if (currImageNum < images.length) {
      setCurrImageNum(currImageNum + 1);
    }
  }

  const moveLeft = () => {
    if (currImageNum > 1) {
      setCurrImageNum(currImageNum - 1);
    }
  }

  useEffect(() => {
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        setOpened(false);
      }
      if (evt.keyCode == 37) {
        moveLeft();
      }
      if (evt.keyCode == 39) {
        moveRight();
      }
    };
  }, [currImageNum]);

  return (<div>
    <Layout album={base_url + 'back.jpg'}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={photoStyles.photojumbotext}>
        <p className={photoStyles.photorealtext}>{title}</p> 
        <p className={photoStyles.photosubtext}>{date}</p>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
    </div>
    <div className={photoStyles.photoscontainer}>
      {images.map((imagesize, i) => {
        const imageNum = i + 1;
        const imgURL = base_url + imageNum + '.jpg';
        return <div className={photoStyles.photo} key={imageNum}>
          <img src={imgURL} className={imagesize == 1 ? photoStyles.photoreal : photoStyles.photorealhalf} 
            onClick={() => {openImage(imageNum)}}/>
        </div>
      })}
    </div>
    <div style={opened ? {display: 'block'} : {display: 'none'}} className={photoStyles.overlay}>
      <img src={base_url + currImageNum + '.jpg'} 
          className={photoStyles.photofull} 
          onClick={() => setOpened(false)}>
      </img>
      <a href="javascript:void(0)" 
        className={photoStyles.closebtn} 
        onClick={() => setOpened(false)}>
        &times;
      </a>
      <a href="javascript:void(0)" 
        className={photoStyles.rightarrow}
        onClick={moveRight}>&#8250;</a>
      <a href="javascript:void(0)" 
        className={photoStyles.leftarrow}
        onClick={moveLeft}>&#8249;</a>
    </div>
  </div>)
}