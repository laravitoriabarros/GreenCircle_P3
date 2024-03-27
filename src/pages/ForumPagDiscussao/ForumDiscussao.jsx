import Header from '../../components/header/Header'
import Topicos from '../../components/Topicos/index'
import ForumPage from '../../components/paginaDiscussao/forumDiscussao'
import Footer from '../../components/footer/Footer'
import { useLocation } from "react-router-dom";
import './paginaForunEstilo.css'



export const  ForumDiscussao = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get("postId");


    return(
        <div>
            <div className='headerDisc'> <Header/></div>
            <div className='pagina'>
                <Topicos/>
               <ForumPage postId={postId}/>
            </div>
            <footer> 
                <Footer/>
            </footer>

        </div>
    )
}

export default ForumDiscussao
