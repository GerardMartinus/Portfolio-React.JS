import './estilo.css'

import ImagensFrontend from '../ImagensFrontend'



function FESection(){
    return (
        <section className='Frontend-Section'>
            <ImagensFrontend />
            <div color='Frontend-Section-right'>
                <h2>Desenvolvedor Front-end</h2>
                <h3>React.Js, HTML, CSS, Javascript</h3>
                <p>
                    Desenvolvo projetos web utilizando React JS,
                    HTML, CSS e Javascript.

                </p>
            </div>
        </section>
    )
}

export default FESection