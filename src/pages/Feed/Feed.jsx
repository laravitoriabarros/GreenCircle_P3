import './Feed.css'
import { useEffect } from 'react'
import { useState } from 'react'
//import { Tweet } from '../../components/tweet/Tweet'
//import { Separator } from '../../components/separador/Separador'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Wind, ThermometerSimple, DropHalf, CloudRain } from '@phosphor-icons/react'
import { db} from '../../Firebase/config'; // Ajuste o caminho conforme necessário
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; 
import PostForm from '../../components/tweet/PostForm'


export function Feed(){
    // TITULO DA PAGINA
    useEffect(() => {
        document.title = "Feed"
        const botao = document.getElementById('automatico')
        if(botao){
          botao.click()
        }
    })
    // -------------------------------

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const postsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(postsArray);
        });

        return () => unsubscribe();
    }, []);

  const [city, setCity] = useState("Maceió")
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=503b3eaf8e5a407e9b0114126243101&q=${city}&lang=pt`)
    .then((response) => {
      if(response.status === 200)
      {
        return response.json()
      }
    })
    .then((data) => {
      setWeatherForecast(data)
    })
  }
    return(
      <div>
        <div className="headerFeed"> <Header /></div>
          
        <div className="feed">
          <div className="previsao">
            <div className="header-temp">
              <h3>Verifique agora a previsão de tempo da sua cidade!</h3>
              <p>Digite o nome da sua cidade e clique em Pesquisar</p>
              <div className="form-city">
                <input onChange={handleChange} type="text" value={ city }/>
                <button onClick={handleSearch} id="automatico">Pesquisar</button>
              </div>
            </div>
            {weatherForecast ? (
            <div className="container-tempo">
              <h3>Hoje o dia está {weatherForecast.current.condition.text}</h3>
              <div className="container-temperatura">
                <img src={weatherForecast.current.condition.icon} alt="" />
                <div className="grau">
                  <h1>{city}</h1>
                  <h1>{weatherForecast.current.temp_c}<sup>°</sup></h1>
                </div>
              </div>
                <p className="separador"></p>
                  <div className="infos-adicionais" >
                    <div className="vento">
                      <Wind size={20} />
                        Vento <br/> {weatherForecast.current.wind_kph} km/h
                    </div>
                    <div className="pressure">
                      <ThermometerSimple size={20} />
                      Pressão<br/> {weatherForecast.current.pressure_mb} mbar
                    </div>
                    <div className="umidade">
                      <DropHalf size={20} />
                      Umidade<br/> {weatherForecast.current.humidity}%
                    </div>
                    <div className="chuva">
                      <CloudRain size={20} />
                      Chuva<br/> {weatherForecast.current.cloud}%
                      </div>
                    </div>
                  </div>
                ) : null}
            </div>
          <div className="timeline">
            <div>
            <PostForm />
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.text}</p>
                    {post.imageUrl && <img src={post.imageUrl} alt="Post" style={{maxWidth: '100%'}} />}
                </div>
            ))}
        </div>
          
          </div>
          <div className="grupos">
            <div className="grupos-container">
              <h3>Grupos que talvez você conheça</h3>
              <div className="grupo1">
                <img src='./src/assets/ovelhas.jpg' alt="" />
                Nome da fazenda
                <button>Conectar</button>
              </div>
              <div className="grupo2">
                <img src='./src/assets/vaca.avif' alt="" />
                Nome da fazenda
                <button>Conectar</button>
              </div>
              <div className="grupo3">
                <img src='./src/assets/vacas.jpg' alt="" />
                Nome da fazenda
                <button>Conectar</button>
            </div>
          </div>
        {/* <div className="container-ver-tudo">
        <p className="separador-cinza"></p>
        <button id="ver-tudo">Ver Tudo</button>
        </div>   */}
        </div>
        </div>
        <div className="footer"> <Footer /></div>
      </div>
    )
}