import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.scss'

const contact = () => {
    return (
        <div>
            <Nav />

            <div className={styles.heading}>
                <h1>contact me.</h1>
            </div>

            <div className={styles.center}>
                <h1>zane.gilfillan@gmail.com</h1>
            </div>

            <Footer />
        </div>
    )
}

export default contact
