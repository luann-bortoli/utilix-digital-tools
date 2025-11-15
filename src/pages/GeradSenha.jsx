import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import passwordIcon from '../assets/password.svg'
import styles from '../styles/GeradSenha.module.css'
import { useState } from 'react'
import copyIcon from '../assets/copy.svg'

export default function GeradSenha(){

    const [useSymbol, setUseSymbol] = useState(true)
    const [useNumber, setUseNumber] = useState(true)
    const [useUpper, setUseUpper] = useState(true)
    const [useLower, setUseLower] = useState(true)

    const [passwordLength, setPasswordLength] = useState("")
    const [passwordOutput, setPasswordOutput] = useState("")

    const copyPassword = () =>{
        navigator.clipboard.writeText(passwordOutput)
    }

    const passwordGenerator = () =>{
        const symbolChar = "!@#$%^&*()_+[]{}|;:,.<>?"
        const numberChar = "0123456789"
        const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowerChar = "abcdefghijklmnopqrstuvwxyz"

        let allChar = ""

        useSymbol ? allChar += symbolChar : null
        useNumber ? allChar += numberChar : null
        useUpper ? allChar += upperChar : null
        useLower ? allChar += lowerChar : null

        let length = passwordLength > 0 ? passwordLength : 10;
        let password = ""

        for(let i=0;i<length;i++){
            const randomChar = Math.floor(Math.random() * allChar.length)
            password += allChar[randomChar]
        }
        setPasswordOutput(allChar.length == 0 ? "Escolha ao menos um tipo de caractere!" : password)
    }

    return(
        <>
            <Header />
            <main style={{marginTop: "160px"}}>
                
               <div className={styles.container}>

                <div className={styles.optionsContainer}>
                    <button className={`${styles.optionsButton} ${useSymbol ? "" : styles.buttonUnselec}`} onClick={() => setUseSymbol(!useSymbol)}>Símbolos</button>
                    <button className={`${styles.optionsButton} ${useNumber ? "" : styles.buttonUnselec}`} onClick={() => setUseNumber(!useNumber)}>Números</button>
                    <button className={`${styles.optionsButton} ${useUpper ? "" : styles.buttonUnselec}`} onClick={() => setUseUpper(!useUpper)}>Letras maiúsculas</button>
                    <button className={`${styles.optionsButton} ${useLower ? "" : styles.buttonUnselec}`} onClick={() => setUseLower(!useLower)}>Letras minúsculas</button>
                </div>

                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <img src={passwordIcon} alt="" />
                        <p>Gerador de senhas</p>
                    </div>
                    
                    <div className={styles.outputContainer}>
                        <input value={passwordOutput} className={styles.output} type="text" readOnly />
                        <div onClick={copyPassword} className={styles.copyContainer}><img src={copyIcon}/></div>
                    </div>

                    <div className={styles.responseContainer}>
                        <input value={passwordLength} onChange={(e) => setPasswordLength(Number((e).target.value)) } className={styles.outputLenght} placeholder='Comprimento da senha' type="number" />
                        <button onClick={passwordGenerator}>Gerar</button>
                    </div>
                </div>

               </div>

            </main>
            <Footer />
        </>
    )
}