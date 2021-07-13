import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Design.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import study from '../public/img/studyroom.png'
import safe from '../public/img/safespace.png'
import aston from '../public/img/aston-martin.png'
import veils from '../public/img/veils.png'

const design = () => {
    return (
        <div>
            <Nav />
            <div className={styles.heading}>
                <h1>designs.</h1>
            </div>

            <div className={styles.container}>
                <Link href='https://mysterious-meadow-15624.herokuapp.com/'><Image src={study} /></Link>
            </div>

            <div className={styles.container}>
                <Link href='https://zane-gilfillan.github.io/Bathroom-Finder/index.html'><Image src={safe} /></Link>
            </div>

            <div className={styles.container}>
                <Image src={aston} />
            </div>

            <div className={styles.container}>
                <Image src={veils} />
            </div>
            <Footer />
        </div>
    )
}

export default design
