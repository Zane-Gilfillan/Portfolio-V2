import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/AboutMe.module.scss'
import Image from 'next/image'
import proPic from '../public/img/propic.jpg'
import next from '../public/img/next-js.svg'

const about_me = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>
            <Nav />

            <div id="about-me" className={styles.about_me}>
                <div className={styles.showcase}>
                    <div className={styles.title}>
                        <h1 className={styles.tite_text}>zane gilfillan.</h1>
                    </div>
                    <div className={styles.profile_img}>
                        <Image src={proPic} alt='a picture of me' height='500' width='400'  />
                    </div>
                </div>
                
                <div className={styles.bio_info}>
                    <div className={styles.bio_info}>
                        <p className={styles.bio_text}>i am a chicago based web developer and audio designer.</p>
                    </div>
                    <div className={styles.icon_grid}>
                        <i className="fab fa-html5 fa-5x"></i>
                        <i className="fab fa-css3-alt fa-5x"></i>
                        <i className="fab fa-sass fa-5x"></i>
                        <i className="fab fa-js fa-5x"></i>
                        <i className="fab fa-node-js fa-5x"></i>
                        <i className="fab fa-react fa-5x"></i>
                        <i className="fab fa-next fa-5x"></i>
                        <i><Image src={next} alt='icon image' /></i>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default about_me
