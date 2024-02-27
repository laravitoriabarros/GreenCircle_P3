import './ArticleWiki.css'
import { useEffect } from 'react'
import Article from '../../components/Article/Article'; 
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Topicos from '../../components/Topicos/index'

export function ArticleWiki(){
    // TITULO DA PAGINA
    useEffect(() => {
        document.title = "Feed"
    })
    return (
        <div>
            <div className='header'><Header /></div>
            <div className='main'>
            <div className='topicWiki'><Topicos /></div>   
                <Article />
            </div>
            <Footer />
        </div>
    );
}