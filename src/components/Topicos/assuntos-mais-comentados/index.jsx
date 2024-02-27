import { Link } from 'react-router-dom'
import pessoa1 from '../../../assets/icones/pessoa1.png'
import pessoa2 from '../../../assets/icones/pessoa8.png'
import pessoa3 from '../../../assets/icones/pessoa3.jpeg'
import pessoa4 from '../../../assets/icones/pessoa5.jpeg'




import './style.css'

const index = () => {
    return (
        <div className="topicos">

            <div className="lista-topicos">

                <h2>Assuntos Mais Comentados</h2>

                <ul>

                    <li>
                        <div className='alinhar'>
                            {/* Título do tópico mais comentado */}
                            <Link to="/">
                                <span>#Broca-do-café</span>
                            </Link>

                            <div className="lista-imagens">
                                <img className="avatar" src={pessoa1} alt="" />
                                <img className="avatar" src={pessoa2} alt="" />
                                <img className="avatar" src={pessoa3} alt="" />
                            </div>
                        </div>

                        <div className='post'>19,259 post</div>

                    </li>


                    <li>
                        <div className='alinhar'>
                            {/* Título do tópico mais comentado */}
                            <Link to="/">
                                <span>#Mofo Branco</span>
                            </Link>
                            <div className="lista-imagens">
                                <img className="avatar" src={pessoa1} alt="" />
                                <img className="avatar" src={pessoa4} alt="" />
                                <img className="avatar" src={pessoa2} alt="" />
                            </div>
                        </div>
                        <div className='post'>19,259 post</div>
                    </li>
                    <li>
                        <div className='alinhar'>
                            {/* Título do tópico mais comentado */}
                            <Link to="/">
                                <span>#Circulo da Soja</span>
                            </Link>
                            <div className="lista-imagens">
                                <img className="avatar" src={pessoa3} alt="" />
                                <img className="avatar" src={pessoa1} alt="" />
                                <img className="avatar" src={pessoa4} alt="" />
                            </div>
                        </div>
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

export default index;