import NavWiki from '../nav-wiki/NavWiki'

import Assuntoscomentados from './assuntos-mais-comentados'
import TopicosPopulares from './populares'
import './style.css'

const index = () => {
  return (
        
<div className='icone'>

       <NavWiki/>
        {/* Div com lista de assuntos mais comentados */}
        <Assuntoscomentados/>
        {/*  lista de tópicos populares */}
        <TopicosPopulares/>
        
    </div>
  )
}

export default index;