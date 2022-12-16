import './estilo.css';

import eu from '../../imagens/eu-photo.jpg'

import MenuHeader from '../MenuHeader'
import Footer from '../Footer'

function SobreMim() {
    return (


    <div classname="App">
      <header classname="App-header">
        <MenuHeader />
        <div className='sobre-mim'>
          <h2>Sobre mim</h2>
          <h3>Minha história com a tecnologia</h3>
          <p>
            Sempre fui uma pessoa com grande paixão por tecnologia, quando criança ganhei meu primeiro PC,
            um daqueles Pentium 4 todo branco e com monitor de tubo, um mega dinossauro tecnologico, 
            mas que serviu o bastante para desenvolver bastante conhecimento de computadores.<br />
            Depois de muitos anos, decidi estudar programação, mais exatamente no ano de 2018,
            onde comecei a estudar por conta própria, 4 anos se passaram e gosto cada vez mais de tecnologia.<br />
            Atualmente, estudo Programação de Jogos Digitais no Senac Lapa Tito e Sistemas da informação na Estácio.
            Hoje sou Front-end, mas estou estudando para me tornar Fullstack.
            <br /><br />
            Gosto muito de fotografia, músicas e jogos. Durante o curso de jogos desenvolvi alguns protótipos
            de jogos de plataforma e alguns algoritmos básicos.<br />
            Pretendo iniciar como Front-end, Back-end ou Fullstack, para aprender e me desenvolver como profissional.
          </p>
          <img src={eu} className='foto-minha' alt='Homem segurando uma camera' />
        </div>
        <Footer />
      </header>
    </div>
    
    );
}

export default SobreMim;