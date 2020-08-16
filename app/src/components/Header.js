import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import Logo from '../../public/img/network_enterprise_business_shopping_1731.png'
import './styles/Header.css'
import './styles/LogoFiguras.css'

class Header extends Component {
    render() {
        return (<header className="header">
            <Link to="/">
                {/* <img className="logo" src={Logo} alt="Logo_Adimen" /> */}
                <div className="logo">
                    <div id="yin-yang"></div>
                </div>
            </Link>
            <h1 className="center">ADIMEN TECNOLOGIA</h1>
        </header>
)
    }
}

export default Header