import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'

const images = [1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1] // sizes;
const title = 'Big Sur'
const date = 'July 2019'
const base_url = '/images/bigsur/';

export default function Bigsur() {
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
      {/* <p className={photoStyles.albumhighlighttext}>
        This was my first time in Europe and first spring break trip outside the US.
      </p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/_RWJC-YpHFA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <p className={photoStyles.albumtext}>
        This trip happened back in my sophomore year of college when we found out that tickets
        to Iceland were on going for way too cheap (After our trip, they quickly realized and stopped the deal). 
        For just $300, we booked a roundtrip ticket and were on our way. Luckily, I was inspired by Casey 
        Neistat at the time and happened to create a vlog of the trip.
      </p> */}
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