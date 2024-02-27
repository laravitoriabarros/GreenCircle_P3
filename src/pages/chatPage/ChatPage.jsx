import { Header } from '../../components/header/Header.jsx'; 
import { Chat } from '../../components/Chat/Chat.jsx'; 
import { Footer } from '../../components/footer/Footer.jsx';
import './ChatPage.css'

export function ChatPage() {
    return (
        <div>
            <div className='headerChat'><Header /></div> 
            <Chat />
            <Footer />
        </div>
    );
}
