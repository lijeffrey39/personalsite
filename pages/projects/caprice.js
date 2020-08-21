import React from 'react';
import Head from 'next/head'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import projectStyles from '../../styles/projects.module.css'
import ProgressBar from "react-scroll-progress-bar"; 

const title = 'Caprice'

export default function Caprice() {
  return (<>
    <Layout projectcolor={'#ffe5ae'}>
      <Head>
        <title>{title}</title>
      </Head>
      <ProgressBar/>
      <div className={projectStyles.projectjumbo}>
        <div className={projectStyles.jumboinline}>
          <p className={projectStyles.projectjumbotext}>{title}</p>
          <p className={projectStyles.projectsubjumbotext}>
            A three-part motion controlled synthesizer comprised of a smartphone, laptop, and VR controller.
          </p>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='https://github.com/lijeffrey39/caprice'>
            Github
          </a><br/>
          <a className={projectStyles.projectlink} style={{marginTop: 0}} href='/caprice.pdf'>
            Final Paper
          </a>
        </div>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumhighlighttext}>
        What started out as a crazy idea quickly became a reality in my senior year capstone class at CMU.
      </p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/MloAVegWtZ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className={photoStyles.albumtext}>
        Jason, Michael and I had thrown around many ideas for our capstone project, most of which were absurd or made no sense.
        We were all musically inclined so at least we had somewhat narrowed our project genre. At the time, we looked specifically
        into new ways to generate and interact with music. After some searching, I stumbled upon a Shark Tank <a href="https://www.youtube.com/watch?v=yjyhXKOq0Jg">video </a> 
        that was similar to the idea we had: using motion to control and sythesize music with just your hands.
      </p>
      <p className={photoStyles.albumtext}>
        The main limitiations we wanted to solve was the fact that it required two specific phones to 
        have full control because who just has 2 phones lying around. We also wanted to model our product around a good user 
        experience while being easily accesible. Because of this, we decided to keep the left hand controlling the phone and 
        the right hand controlling the VR controller. We chose a <a href="https://www.amazon.com/Samsung-ET-YO324BBEGUS-Gear-VR-Controller/dp/B06XHXRXP1">VR controller  </a>
        in the right hand because it was both cheap ($12 with prime 2-day delivery) and easy to use. 
        Below is how the left and right hand controlled Caprice.
      </p>
    </div>
    <div className={photoStyles.photoscontainer}>
      <div className={photoStyles.photo}>
        <img src={'/images/caprice2.png'} className={photoStyles.photorealhalf}/>
      </div>
      <div className={photoStyles.photo}>
        <img src={'/images/caprice3.png'} className={photoStyles.photorealhalf}/>
      </div>
    </div>
    <div className={photoStyles.phototext}>
      <p className={photoStyles.albumtext}>
        The biggest issue we had throughout the project was figuring out how Bluetooth worked, something we are still 
        unclear about. Since the VR controller relied on Bluetooth for communication, figuring this out was really important.
      </p>
      <p className={photoStyles.albumtext}>
        After weeks of struggling to connect and hack into the controller, we finally got access to the internal data stream. The goal was to have
        all this data be fed into a system to detect motions and interactions from the remote. For example, Micheal made a classifier to 
        detect controller swipes that would be used to separate notes. The phone in the left hand would be for note inputs by using a basic keyboard screen.
        We soon found out that we couldn't feed this data directly to the phone, so sadly we had to use a laptop 
        as the middle-man to collect data from the phone and VR controller. Below is a general system overview.
      </p>
      <div className={photoStyles.photo}>
        <img src={'/images/caprice1.png'} className={photoStyles.photoreal}/>
      </div>
      <p className={photoStyles.albumtext}>
        After finally getting it to play notes from our phone, laptop, and controller combination, 
        we still had 2 weeks before the due date. Since we were stuck with using the laptop, we decided to 
        let the user customize their playing experience. We ended up creating a web app that anyone could connect 
        their phone and controller to.
      </p>
      <p className={photoStyles.albumtext}>
        Overall, the idea was interesting and all but in the end, we couldn't get it to work exactly
        as we planned. The best part of the project was probably the video we made at the end and the 
        final paper that actually looked like a real research paper. 
      </p>
    </div>
  </>)
}