import { Link } from 'react-router-dom';
import './StyleHeader.css';

export const Header = () => {
    return (
        <header>
            <div className="logotype">
                <img id="logoSimbol" src="./src/assets/logo.png" alt="Logo da GreenCircle" />
                <span id="logo"> GreenCircle </span> 
            </div>
            <div className="navegation">
                <Link to="/"><img id="homeIcon" src="./src/assets/home.svg" alt="Home" /></Link>
                <Link to="/article"><img id="wikiIcon" src="./src/assets/agrowiki.svg" alt="Wiki" /></Link>
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
        </header>
    );
};
export default Header;