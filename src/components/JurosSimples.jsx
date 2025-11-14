import styles from "../styles/JurosSImples.module.css"
import { useState } from "react"
import percentIcon from '../assets/percent.svg'

export default function JurosSimples(){

    const [inputCapInic, setinputCapInic] = useState("")
    const [inputTaxaJur, setinputTaxaJur] = useState("")
    const [inputTempJur, setinputTempJur] = useState("")
    const [output, setOutput] = useState("")
    const [handleOutput, setHandleOutput] = useState(false)

    const [capNull, setCapNull] = useState(false)

    const [responseCapInic, setResponseCapInic] = useState("")
    const [responseTaxaJur, setResponseTaxaJur] = useState("")
    const [responseTempJur, setResponseTempJur] = useState("")
    
    const handleCalc = () =>{
        if(inputCapInic !== "" && inputTaxaJur !== "" && inputTempJur !== ""){
            let capital = Number(inputCapInic)
            let juros = Number(inputTaxaJur)
            let tempo = Number(inputTempJur)

            let montante = capital + (capital * (juros / 100) * tempo)

            setOutput(montante)
            setHandleOutput(true)

            setResponseCapInic(capital)
            setResponseTaxaJur(juros)
            setResponseTempJur(tempo)
        }

        if(inputCapInic == ""){
            setCapNull(true)
        }else{
            setCapNull(false)
        }
    }

    return(
        <>
            <div className={styles.titleContainer}>
                <img src={percentIcon} alt="" /><p className={styles.title}>Juros simples</p>
            </div>

            <div className={styles.responseContainer}>

                {handleOutput &&(
                    <div className={styles.response}>
                        <p className={styles.responseTitle}>{output.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                        <p className={styles.responseDesc}>Após {responseTempJur} meses, recebendo {responseTaxaJur}% por mês, você irá receber {(output-responseCapInic).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} em juros e acumular um total de {output.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}!</p>
                    </div>
                )}
            </div>

            <div className={styles.inputContainer}>

                <div className={styles.leftContent}>

                    <div className={`${styles.capitalInicial} ${capNull ? styles.capNull : ""}`}>
                        <p>R$</p>
                        <input type="number" maxLength={12} placeholder={capNull ? "Preencha este campo!" : "0,00"} value={inputCapInic} onChange={(event) => setinputCapInic(event.target.value)} />
                    </div>

                    <div className={`${styles.taxaJuros} ${capNull ? styles.capNull : ""}`}>
                        <p>%</p>
                        <input type="number" maxLength={12} placeholder={capNull ? "Preencha este campo!" : "0"} value={inputTaxaJur} onChange={(event) => setinputTaxaJur(event.target.value)} />
                    </div>

                </div>

                <div className={styles.rightContent}>

                    <div className={`${styles.tempoJuros} ${capNull ? styles.capNull : ""}`}>
                        <p>Meses</p>
                        <input type="number" maxLength={12} placeholder={capNull ? "Preencha este campo!" : "0"} value={inputTempJur} onChange={(event) => setinputTempJur(event.target.value)} />
                    </div>

                    <button className={styles.calcButton} onClick={handleCalc}>Calcular</button>

                </div>
                

            </div>
        </>
    )
}