import styles from '../styles/Footer.module.css'
import logo from '../assets/logo.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import twitterIcon from '../assets/twitter.svg'
import instagramIcon from '../assets/instagram.svg'

export default function Footer(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Utilix" />
                        <p>Utilix</p>
                    </div>
                    <div className={styles.sections}>
                        <p>Sessões</p>
                        <ul>
                            <li><a href="">Matemática</a></li>
                            <li><a href="">Downloaders</a></li>
                            <li><a href="">Conversores</a></li>
                            <li><a href="">Diversos</a></li>
                        </ul>
                    </div>
                    <div className={styles.sections}>
                        <p className={styles.socialP}>Social</p>
                            <a href="https://www.linkedin.com/in/luann-de-bortoli-354bba34b/"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/luann-bortoli"><img src={githubIcon} alt="" /></a>
                    </div>
                </div>
                <hr />
                <p>&copy; 2025 Utilix. Todos os direitos reservados.</p>
                
            </div>
        </>
    )
}