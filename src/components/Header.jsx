import logo from '../assets/logo.svg'

import styles from '../styles/Header.module.css'
import Dropdown from './Dropdown.jsx'

export default function Header(){
    return(
        <>
            <div className={styles.container}>

                <img src={logo} alt="Utilix logo"/>
                <p className={styles.logoTitle}>Utilix</p>

            </div>
            <div className={styles.sections}>
                <Dropdown title={'Matemática'} options={['Calculadora de juros compostos', 'Placeholder', 'Placeholder', 'Placeholder']}/>
                <Dropdown title={'Downloaders'} options={['Baixador de videos do Youtube', 'Placeholder', 'Placeholder', 'Placeholder']}/>
                <Dropdown title={'Conversores'} options={['Converter SVG para PNG', 'Placeholder', 'Placeholder', 'Placeholder']}/>
                <Dropdown title={'Diversos'} options={['Quantos dias de X á Y', 'Placeholder', 'Placeholder', 'Placeholder']}/>
            </div>
        </>
    )
}