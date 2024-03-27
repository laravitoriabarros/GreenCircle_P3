import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { auth } from '../../Firebase/config'; 
import './StyleHeader.css';

export const Header = () => {
    const [logoutSuccess, setLogoutSuccess] = useState(false); // Estado para controlar o redirecionamento
    const navigate = useNavigate(); // Importe useNavigate para redirecionar o usuário

    const handleLogout = async () => {
        try {
            await auth.signOut(); // Chama o método de logout do Firebase Authentication
            setLogoutSuccess(true); // Defina logoutSuccess como true após o logout
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    useEffect(() => {
        if (logoutSuccess) {
            navigate('/'); // Redirecionar para página de login após o logout
        }
    }, [logoutSuccess, navigate]);

    return (
        <header>
            <div className="logotype">
                <img id="logoSimbol" src="./src/assets/logo.png" alt="Logo da GreenCircle" />
                <span id="logo"> GreenCircle </span> 
            </div>
            <div className="navegation">
                <Link to="/feed"><img id="homeIcon" src="./src/assets/home.svg" alt="Home" /></Link>
                <Link to="/wiki"><img id="wikiIcon" src="./src/assets/agrowiki.svg" alt="Wiki" /></Link>
                <Link to="/chat"><img id="messageIcon" src="./src/assets/messages.svg" alt="Messages" /></Link>
                {/*<img id="circlesIcon" src="./src/assets/circles.svg" alt="Circles" />*/}
            </div>
            <div className="search">
                <form action="form.php" method="POST" className="search">
                    <img id="searchIcon" src="./src/assets/search.svg" alt="search" /> 
                    <input id='placeH' type="text" placeholder="Encontre pessoas e mais...." />
                </form>
            </div>
            <div className="profile">
                {/*<img id="notification" src="./src/assets/notification.svg" alt="notification" />*/} 
                <img id="profileIcon" src="./src/assets/profile.png" alt="Profile Picture" />
            </div>
            <div className="logout"> {/* Adicione uma div para o botão de logout */}
                <button onClick={handleLogout}>Sair</button> {/* Botão de logout */}
            </div>
        </header>
    );
};
export default Header;
