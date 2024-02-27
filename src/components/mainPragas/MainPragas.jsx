import { Link } from 'react-router-dom';
import './StyleMain.css';
import Carousel from '../Carousel';

// Componente Main
export const MainPragas = () => {
    const images = [
        "./src/assets/produto1.png",
        "./src/assets/produto2.png",
        "./src/assets/produto2.png",
      ];
    return (
        <main>
            <div className="container-de-cima">
                {/*<div className="container-rate">
                    <p className="windowTitle"><strong>Controle de pragas</strong></p>
                    <p className="windowSubtitle">Produtos em alta</p>
                    <p className="windowTitleItens">Actil Oil</p>
                    <p className="windowSubtitleItens">Avaliação 4.6</p>
                    <p className="windowTitleItens">Evo Mn Pro</p>
                    <p className="windowSubtitleItens">Avaliação 4.6</p>
                    <p className="windowTitleItens">Evo Mn Pro</p>
                    <p className="windowSubtitleItens">Avaliação 4.6</p>
                    <p className="seeAll">Ver tudo</p>
                </div>*/}
                
                
                <div className="products">
                    <div>
                        <p><strong>Produtos em Alta</strong></p>
                        <Carousel images={images} />
                    </div>
                    {/*<div id="produto1">
                        <p className="number"> 1 </p>
                        <img src="./src/assets/produto1.png" alt="produto1" />
                    </div>
                    <div id="produto2">
                        <p className="number"> 2 </p>
                        <img src="./src/assets/produto2.png" alt="produto2" />
                    </div>
                    <div id="produto3">
                        <p className="number"> 3 </p>
                        <img src="./src/assets/produto2.png" alt="produto3" />
            </div>*/}
                </div>
                
            </div>
            <div className="container-de-baixo">
                <div className="mapa">
                    <p className="practice-title">Principais pragas na sua região</p>
                    <img src="./src/assets/mapa.png" alt="mapa alagoas" />
                </div>
                <div className="insetos">
                    <div className="container-praga">
                        <div><img src="./src/assets/ellipse-19.png" alt="" /></div>
                        <div>
                            <p className="insect-name"><strong>Nome do inseto</strong></p>
                            <div className="barra-container">
                                <div className="barra-progresso"></div>
                            </div>
                            <p className="insect-life">ciclo de vida do inseto</p>
                        </div>
                        <div><Link to="/article"><img src="./src/assets/arrow.svg" alt="" /></Link></div>
                    </div>
                    <div className="container-praga">
                        <div><img src="./src/assets/ellipse-19.png" alt="" /></div>
                        <div>
                            <p className="insect-name"><strong>Nome do inseto</strong></p>
                            <div className="barra-container">
                                <div className="barra-progresso"></div>
                            </div>
                            <p className="insect-life">ciclo de vida do inseto</p>
                        </div>
                        <div><Link to="/article"><img src="./src/assets/arrow.svg" alt="" /></Link></div>
                    </div>
                    <div className="container-praga">
                        <div><img src="./src/assets/ellipse-19.png" alt="" /></div>
                        <div>
                            <p className="insect-name"><strong>Nome do inseto</strong></p>
                            <div className="barra-container">
                                <div className="barra-progresso"></div>
                            </div>
                            <p className="insect-life">ciclo de vida do inseto</p>
                        </div>
                        <div><Link to="/article"><img src="./src/assets/arrow.svg" alt="" /></Link></div>
                    </div>
                    <div className="container-praga">
                        <div><img src="./src/assets/ellipse-19.png" alt="" /></div>
                        <div>
                            <p className="insect-name"><strong>Nome do inseto</strong></p>
                            <div className="barra-container">
                                <div className="barra-progresso"></div>
                            </div>
                            <p className="insect-life">ciclo de vida do inseto</p>
                        </div>
                        <div><Link to="/article"><img src="./src/assets/arrow.svg" alt="" /></Link></div>
                    </div>
                </div>
                <div className="combat-practices">
                    <div className="sustentability">
                        <p className="practice-title">Práticas de combate Sustentáveis</p>
                        <p className="sustainable-practices">Manejo Integrado de Pragas (MIP)<a className="see-more"><Link to="/article"><u>saiba mais</u></Link></a></p>
                        <p className="sustainable-practices">Controle Biológico<a className="see-more"><Link to="/article"><u>saiba mais</u></Link></a></p>
                        <p className="sustainable-practices">Rotação de Culturas <a className="see-more"><Link to="/article"><u>saiba mais</u></Link></a></p></div>
                    <div className="other-practices">
                        <p className="practice-title">Outras práticas</p>
                        <p className="practices">Pesticidas Biológicos<a className="see-more"><Link to="/article"><u>saiba mais</u></Link></a></p>
                        <p className="practices">Calda Sulfocálcica<a className="see-more"><Link to="/article"><u>saiba mais</u></Link></a></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainPragas;