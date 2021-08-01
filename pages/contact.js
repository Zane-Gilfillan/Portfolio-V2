import 'react-quill/dist/quill.snow.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.scss'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	
})

QuillNoSSRWrapper.displayName = 'QuillNoSSRWrapper'

const contact = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
    
        let data = {
            name,
            email,
            message
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true) 
              setName('')
              setEmail('')
              setMessage('')
          }
      })
    }

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
                        < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' />  
                    </formGroup>

                    < formGroup className={styles.inputGroup} >
                        < label htmlFor='email'>email:</label>
                        < input type='email' onChange={(e)=>{setName(e.target.value)}} name='email'  />
                    </formGroup>

                    < formGroup className={styles.message_area} >
                        < label htmlFor='message'>message</label>
                        < textarea type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.text_input} />
                        < input type='submit' value='submit' className={styles.sub_btn} onClick={(e)=>{handleSubmit(e)}}/>
                    </formGroup>


                    {/* this i will replace the text area for a WYSIWYG editor in the future */}
                    {/* < formGroup className={styles.inputGroup} >
                        < label htmlFor='message'></label>
                        <QuillNoSSRWrapper type='text' name='message' className={styles.quill}  theme="snow" />
                    </formGroup> */}
                </form >
            </div>
            

            <Footer />
        </div>
    )
}

export default contact
