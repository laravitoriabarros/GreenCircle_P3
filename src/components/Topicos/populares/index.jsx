
import { Link } from 'react-router-dom'

import '../assuntos-mais-comentados/style.css'
const index = () => {
  return (
    <div className="topicos">
    <div className="lista-topicos" >
        <h3>Tópicos Populares</h3>
        <ul>
            <li>
                {/* Título do tópico popular */}
                <Link to="/">
                   <span>Sustentabilidade</span> 
                </Link>
                <div className='post'>19,259 post</div>
            </li>
            <li>
                {/* Título do tópico popular */}
                <Link to="/">
                   <span>Fertilizantes</span> 
                </Link>
                <div className='post'>19,259 post</div>
            </li>
            <li>
                {/* Título do tópico popular */}
                <Link to="/">
               <span> Controle de Pragas</span>
                </Link>
                <div className='post'>19,259 post</div>
            </li>
        </ul>
    </div>

    <div>
        <p>
           {/*<Link to="/forumHome">Ver tudo</Link>*/}
        </p>
    </div>

</div>
  )
}

export default index