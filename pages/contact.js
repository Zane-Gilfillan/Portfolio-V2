import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Contact.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import block from '../public/img/show2.jpg'
import git from '../public/img/github.svg'
import linked from '../public/img/linkedin.svg'
import pdf from '../public/img/pdf-icon.svg'
import FileSaver from 'file-saver';

const resumeDownload = () => {
        
    FileSaver.saveAs(
        process.env.PUBLIC_URL + '/resource/resume.pdf',
        'resume.pdf'
    )
}

const contact = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [buttonText, setButtonText] = useState('submit')

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('thanks!');
        
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
                        < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email'  />
                    </formGroup>

                    < formGroup className={styles.message_area} >
                        < label htmlFor='message'>message</label>
                        < textarea type='text' placeholder='hey, nice to meet you!' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.text_input} />
                        < button type='submit' className={styles.sub_btn} onClick={(e)=>{handleSubmit(e)}}>{buttonText}</button>

                        <div className={styles.mini_grid}>
                            <a href='https://github.com/Zane-Gilfillan' target='_blank' rel='noreferrer'><Image src={git} alt='icon image' height='100' width='100' /></a>
                            <Image onClick={resumeDownload} src={pdf} alt='icon image' height='200' width='120' />
                            <a href='https://www.linkedin.com/in/zane-gilfillan-0018bb20a/' target='_blank' rel='noreferrer'><Image src={linked} alt='icon image' height='100' width='100' /></a>
                            
                        </div>
                    </formGroup>

                    <div className={styles.img_wrap}>
                        <Image src={block} alt='monolith' />
                    </div>
                </form >
            </div>
            

            <Footer />
        </div>
    )
}

export default contact
