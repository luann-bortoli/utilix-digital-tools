import styles from '../styles/Dropdown.module.css'
import { useState } from 'react'
import arrow from '../assets/arrow.svg'

export default function Dropdown({title, options, href}){

    const [visible, setVisible] = useState(false)

    return(
        <>
            <div className={styles.container}
            onMouseEnter={() => (setVisible(true))}
            onMouseLeave={() => (setVisible(false))}
            >

                <p className={styles.title}>{title}</p>
                <img src={arrow} className={styles.titleIcon}/>

                <div className={styles.menu}>
                    {visible &&(
                        options.map((option, index) => (
                            <div key={index} className={styles.options}>
                                <a href={href}>{option}</a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}