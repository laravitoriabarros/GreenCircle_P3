import './Pragas.css'
import { Header } from '../../components/header/Header.jsx'; 
import { MainPragas } from '../../components/mainPragas/MainPragas.jsx'; 
import { Footer } from '../../components/footer/Footer.jsx';
import Topicos from '../../components/Topicos/index'

export function Pragas() {
    return (
        <div>
            <div className='header'><Header /></div>
            <div className='paginaPragas'>
            <div className='topicPraga'><Topicos /></div> 
            <MainPragas />
            </div>
            <Footer />
        </div>
    );
}
