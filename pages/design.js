import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Design.module.scss'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import study from '../public/img/studyroom.png'
import safe from '../public/img/safespace.png'
import aston from '../public/img/aston-martin.png'
import veils from '../public/img/veils.png'


const design = () => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossOrigin="anonymous" />
            </Head>

            <Nav />

            <div className={styles.heading}>
                <h1>designs.</h1>
            </div>

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

            
            <Footer />
        </div>
    )
}

export default design
