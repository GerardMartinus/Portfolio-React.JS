import './estilo.css';

import { Link } from "react-router-dom"

import curriculo from '../../imagens/curriculo.png'
import ecommerce from '../../imagens/ecommerce.png'

import MenuHeader from '../MenuHeader'
import Footer from '../Footer'

function Projetos() {
  return (


    <div classname="App">
      <header classname="App-header">
        <MenuHeader />
        <div className='sobre-mim'>
          <h2>Projetos</h2>
          <section className='projetos'>

            <a href='https://gerardmartinus.github.io/'>
              <img src={curriculo} />
              <div className='projetos-texto'>
                <h4>Curriculo EBAC</h4>
                <p>Um curriculo desenvolvido para o projeto "Jornada Dev" da EBAC.</p>
                <a href='https://github.com/GerardMartinus/gerardmartinus.github.io'>Repositório</a>
              </div>
            </a>

            <a href='https://gerardmartinus.github.io/'>
              <img src={ecommerce} />
              <div className='projetos-texto'>
                <h4>E-commerce Alura Geek</h4>
                <p>Meu terceiro projeto dos desafios da Alura.</p>
                <a href='https://github.com/GerardMartinus/Challenge-Oracle-One-Sprint3'>Repositório</a>
              </div>
            </a>

            <a href='https://github.com/GerardMartinus'>
              <p>
                Repositório do git com outros projetos.
              </p>
            </a>

          </section>
        </div>
        <Footer />
      </header>
    </div>

  );
}

export default Projetos;