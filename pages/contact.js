import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.scss'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	
})

QuillNoSSRWrapper.displayName = 'QuillNoSSRWrapper'

const contact = () => {
    return (
        <div>
            <Nav />

            <div className={styles.heading}>
                <h1>contact me.</h1>
            </div>

            <div className={styles.container}>
                < form className={styles.main} >

                    < formGroup className={styles.inputGroup} >
                        < label htmlFor='name'>name:</label>
                        < input type='text' name='name' className={styles.inputField} />  
                    </formGroup>

                    < formGroup className={styles.inputGroup} >
                        < label htmlFor='email'>email:</label>
                        < input type='email' name='email' className={styles.inputField} />
                    </formGroup>

                    < formGroup className={styles.inputGroup} >
                        < label htmlFor='message'></label>
                        <QuillNoSSRWrapper type='text' name='message' className={styles.quill}  theme="snow" />
                    </formGroup>
                    < input type='submit' value='submit' className={styles.sub_btn}/>
                </form >
            </div>
            

            <Footer />
        </div>
    )
}

export default contact
