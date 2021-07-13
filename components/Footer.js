import style from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={style.footer}>
        <div className={style.footer__addr}>
            <h1 className={style.footer__logo}></h1>
        
            <h2>contact</h2>
            <h6>find me somewhere</h6>
    
    
        </div>
  
    <ul className={style.footer__nav}>
        <li className={style.nav__item}>
        <h2 className={style.nav__title}>media</h2>

        <ul className={style.nav__ul}>
            <li>
            <a href="#">digital design</a>
            </li>
            <li>
            <a href="#">audio engineering</a>
            </li>

        </ul>
        </li>
        
        <li className={style.nav__item}>
        <h2 className={style.nav__title}>technology</h2>
        
        <ul className={style.nav__ul}>
        
            <li>
            <a href="#">next js</a>
            </li>
            <li>
            <a href="#">sass</a>
            </li>
            <li>
            <a href="#">protools</a>
            </li>
            <li>
            <a href="#">maxmsp</a>
            </li>
        
        </ul>
        </li>
        
        <li className={style.nav__item}>
        <h2 className={style.nav__title}>legal</h2>
        
        <ul className="nav__ul">
            <li>
            <a href="#">privacy policy</a>
            </li>
            
            <li>
            <a href="#">terms of Use</a>
            </li>
            
        </ul>
        </li>
    </ul>
    
    <div className={style.legal}>
        <p>&copy; 2021 blah blah blah. all rights reserved.</p>
        
        <div className={style.legal__links}>
        <span>powered by <span className="heart">º</span></span>
        </div>
    </div>
</footer>
    )
}

export default Footer