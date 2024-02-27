import './StyleNav.css'
import { Link } from 'react-router-dom';

export const NavWiki = () => {
    return (
        <body>
            <div className="nav-wiki">
                <div className="navigate">
                <Link to="/forumHome"><img id="forumIcon" src="./src/assets/forum.svg" alt="forum" /></Link>
                    <p>Fórum</p>
                </div> 
                <div className="navigate">
                <Link to="/article"><img id="agrowikiIcon" src="./src/assets/agrowikipg.svg" alt="wiki" /></Link>
                    <p>Agrowiki</p> 
                </div> 
                <div className="navigate">
                <Link to="/pragas"><img id="pragasIcon" src="./src/assets/pragas.svg" alt="pragas" /></Link>
                    <p>Pragas</p>
                </div>
            </div>
        </body>
    );
};
export default NavWiki;