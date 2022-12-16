import eu from '../../imagens/img-fe.png'

import './estilo.css'

function ImagensFrontend(){
    return (
        <div className='images'>
            <img src={eu} className='fe-img' />
        </div>
    )
}

export default ImagensFrontend