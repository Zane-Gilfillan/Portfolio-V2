import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Design.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import turns from '../public/img/turn-one.png'
import study from '../public/img/studyroom.png'
import safe from '../public/img/safespace.png'
import aston from '../public/img/aston-martin.png'
import veils from '../public/img/veils.png'
import next from '../public/img/next-js.svg'


const design = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>

            <Nav />

            <div className={styles.heading}>
                <h1>designs.</h1>
            </div>

            {/* card one */}
            <div className={styles.card}>
                <div className={styles.image_holder}>
                    <Link href='https://zanelandia.herokuapp.com/'><a target='_blank'><Image src={turns} /></a></Link>
                </div>

                <div className={styles.image_descrip}>
                    <h1>turn one</h1>
                    <div className={styles.icon_holder}>
                        <i className="fab fa-sass fa-3x"></i>
                        <i className="fab fa-react fa-3x"></i>
                        <i className="fab fa-node-js fa-3x"></i>
                        <i><Image src={next} height='50' width='50' /></i>
                    </div>
                    <div className={styles.app_descrip}>
                        
                        <p className={styles.list_item}>turn one is a search engine and game companion for Magic: The Gathering</p>
                        <p>using scryfall's powerfull api to return cards as well as displaying an auto-complete function pulling upto 20 cards</p>
                    </div>
                </div>
            </div>
            
            {/* card two */}
            <div className={styles.card}>
                <div className={styles.image_holder}>
                    <Link href='https://mysterious-meadow-15624.herokuapp.com/'><a target='_blank'><Image src={study} /></a></Link>
                </div>

                <div className={styles.image_descrip}>
                    <h1>studyroom</h1>
                    <div className={styles.icon_holder}>
                        <i className="fab fa-sass fa-3x"></i>
                        <i className="fab fa-js fa-3x"></i>
                        <i className="fab fa-node-js fa-3x"></i>
                    </div>
                    <div className={styles.app_descrip}>
                        
                        <p className={styles.list_item}>studyroom is an application that brings users together through classic message board functionality as well as instant messaging.</p>
                        <p> user data is secured via password hashing in mysql</p>
                        <p>instant messaging built with socket.io</p>
            
                    </div>
                </div>
            </div>

            {/* card three */}
            <div className={styles.card}>
                <div className={styles.image_holder}>
                    <Link href='https://mysterious-meadow-15624.herokuapp.com/'><a target='_blank'><Image src={safe} /></a></Link>
                </div>

                <div className={styles.image_descrip}>
                    <h1>safe space</h1>
                    <div className={styles.icon_holder}>
                        <i className="fab fa-sass fa-3x"></i>
                        <i className="fab fa-js fa-3x"></i>
                        <i className="fab fa-node-js fa-3x"></i>
                    </div>
                    <div className={styles.app_descrip}>
                        
                        <p className={styles.list_item}>safe room displays restrooms that are safe and accessible for LGBTQ+ peoples in our community</p>
                        <p>ability to save restrooms that you have used in the past</p>
                        <p>utiling google maps api</p>
            
                    </div>
                </div>
            </div>

            
            <Footer />
        </>
    )
}

export default design
