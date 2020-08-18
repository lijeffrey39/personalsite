import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import photoStyles from '../../styles/photos.module.css'
import utilStyles from '../../styles/utils.module.css'

export default function Iceland() {
  return (<>
    <Layout album={'/images/iceland_back.jpg'}>
      <Head>
        <title>Iceland</title>
      </Head>
      <div className={photoStyles.photojumbotext}>
        <p className={photoStyles.photorealtext}>Iceland</p> 
        <p className={photoStyles.photosubtext}>March 2018</p>
      </div>
    </Layout>
    <div className={photoStyles.phototext}>
      <p className={utilStyles.labelinfo}
        style={{fontSize: 30, fontWeight: 500, marginTop: 20, lineHeight: 1.2, color: '#292930'}}>
        This was my first time in Europe and first spring break trip outside the US.
      </p>
      <p className={utilStyles.labelinfo} style={{lineHeight: 1.5}}>
        This trip happened back in my sophomore year of college when we learned that tickets
        to Iceland were on going for way too cheap (After our trip, they quickly realized and stopped the deal). 
        For just $300, we booked a roundtrip ticket and were on our way. Luckily, I was inspired by Casey 
        Neistat at the time and happened to create a vlog of the trip.
      </p>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/_RWJC-YpHFA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </div>
  </>)
}