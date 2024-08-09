import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import './style.css'
import {Link} from 'react-router-dom'
import{} from 'react-icons'

const Home:React.FC= ()=>{
    return(
        <div id='geral'  >
            <div  className='conteudo'>
             <header>
             <div className='logo'></div>
             <h2 className='logoTittle'>Coleta Seletiva</h2>
             </header>
             <main>
                <h1>Coleta seletiva e reciclagem</h1>
                <h2>Reciclagem de materias diversos</h2>
                <Link to="/create-location" className='button'>
                    <span className='span'>
                    < FiLogIn />
                    </span>
                    <strong className='strong'>Cadastrar novo local de coleta</strong>
                </Link>
             </main>
            </div>
        </div>
    );
}
export default Home