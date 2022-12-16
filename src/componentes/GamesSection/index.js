import './estilo.css'

import ImagensGames from '../ImagensGames'



function FESection(){
    return (
        <section className='Frontend-Section'>
            <ImagensGames />
            <div color='Frontend-Section-right'>
                <h2>Designer e Programador de Jogos Digitais</h2>
                <h3>Construct 3, Unity, C#, Adobe Illustrator, Adobe Photoshop</h3>
                <p>
                    Programo games 2D e 3D utilizando a Game Engine Unity utilizando a linguagem 
                    C#, Construct 3, além de fazer designs utilizando ferramentas de manipulação de
                    imagem e ilustração.
                </p>
            </div>
        </section>
    )
}

export default FESection