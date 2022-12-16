import './estilo.css'

import ImagensBackend from '../ImagensBackend'



function BESection(){
    return (
        <section className='Backend-Section'>
            <ImagensBackend />
            <div color='Backend-Section-right'>
                <h2>Desenvolvedor Back-end</h2>
                <h3>Java e MySQL</h3>
                <p>
                    Programação do lado do servidor utilizando Java,
                    MySQL. <br />
                    (Também desenvolvo jogos na Unity utilizando a linguagem C#.)
                </p>
            </div>
        </section>
    )
}

export default BESection;