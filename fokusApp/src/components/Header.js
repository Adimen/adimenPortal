import React, {Component} from 'react'
import Logo from './Logo'
import './styles/Header.css'

class Header extends Component
{
    render() {
        return(<header className="header__container d-flex">
                <Logo />
                <h1 className="header__title">FOKUS</h1>
            </header>)
    }
}

export default Header