import styles from '../styles/Showcase.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import block from '../public/img/show2.jpg'

const Showcase = () => {
    return (
        <>
            <div className={styles.showcase}>

                <div className={styles.main_grid}>
                    <div className={styles.text_holder}>
                        <h1>minimal website designs.</h1>
                    </div>
                    <div className={styles.img_holder}>
                        <Image src={block} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase
