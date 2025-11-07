import styles from '../styles/Section.module.css'

export default function Section({title, tool, description, icon}){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <img className={styles.titleIcon} src={icon}/>
                        <p className={styles.title}>{title}</p>
                    </div>

                    <div className={styles.toolContainer}>
                        {tool.map((option, index) => (
                            <div key={index} className={styles.optionsContainer}>
                                <p className={styles.toolTitle}>{option}</p>
                                <p className={styles.toolDesc}>{description[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}