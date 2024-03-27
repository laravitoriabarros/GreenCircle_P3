import Header from '../../components/header/Header'
import Topicos from '../../components/Topicos/index'
import Forum from '../../components/postagens/postForum'
import './style.css'


export const  ForumHome = () => {
    return(
        <div className='principal'>
            <div className='header'>
                <Header/>
            </div>
            <div className='pagina'>
            <div className='topicForum'> <Topicos/></div>
                <Forum/>
            </div>
        </div>
    )
}

export default ForumHome
