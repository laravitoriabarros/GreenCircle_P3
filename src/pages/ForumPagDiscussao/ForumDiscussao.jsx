import Header from '../../components/header/Header'
import Topicos from '../../components/Topicos/index'
import ForumPage from '../../components/paginaDiscussao'
import Footer from '../../components/footer/Footer'
import './paginaForunEstilo.css'



export const  ForumDiscussao = () => {
    return(
        <div>
            <div className='headerDisc'> <Header/></div>
            <div className='pagina'>
                <Topicos/>
                <ForumPage/>
            </div>
            <footer> 
                <Footer/>
            </footer>

        </div>
    )
}

export default ForumDiscussao
