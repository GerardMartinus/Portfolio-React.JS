
import { Link } from "react-router-dom"
import Logo from "../Logo"
import './estilo.css'


function MenuHeader() {
    return (

        <div className="menu-header" id="header">
            <div className="itens-header"><Link to="/sobre-mim"><a className="menu-header-links" src="">Sobre mim</a></Link></div>
            <div className="itens-header"><Link to="/projetos"><a className="menu-header-links" src=''>Projetos</a></Link></div>
            <div className="itens-header"><a href="https://gerardmartinus.github.io/" className="menu-header-links" src=''>Curriculo</a></div>
            <div className="itens-header"><Link to="/"><Logo /></Link></div>
            <div className="itens-header"><a href="https://github.com/gerardmartinus/" className="menu-header-links" src=''>Github</a></div>
            <div className="itens-header"><a href="https://www.behance.net/brunomsilva5" className="menu-header-links" src=''>Behance</a></div>
            <div className="itens-header"><a href="https://www.linkedin.com/in/gerardmartinus/" className="menu-header-links" src=''>LinkedIn</a></div>
        </div>
            
    )
}

export default MenuHeader