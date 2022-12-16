import logo from '../../imagens/logo.png'
import './estilo.css'

function Logo () {
    return (
        <div classname="logo">
          <img src={logo} alt='logo' classname="logo-img"></img>
        </div>
    )
}

export default Logo