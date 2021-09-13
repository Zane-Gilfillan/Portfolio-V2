import styles from '../styles/Nav.module.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <>
            <nav className={styles.nav_bar}>
                
                <div className={styles.links}>
                    <ul className={styles.nav_links}>
                        <li><Link href="/">home.</Link></li>
                        <li><Link href="/about_me">about.</Link></li>
                        <li><a href="http://www.heavyveils.com/" target="_blank">audio.</a></li>
                        <li><Link href="/design">designs.</Link></li>
                        <li><Link href="/contact">contact.</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
