import './Inicio.css'
import { useEffect } from "react"
import Header from '../../components/header/Header'


export function Inicio(){
    
    // TITULO DA PAGINA
    useEffect(() => {
        document.title = "Início"
    })
    // -------------------------------

    return(
        <div>
            <Header/>
            Olá
        </div>
    )
}