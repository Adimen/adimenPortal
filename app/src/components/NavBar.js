import React, {Component} from 'react'
import logo from '../../public/img/Adimen.png'

class NavBar extends Component {
    render() {
        return (<div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <div className="Navbar__brand-logo">
                        <img src={logo} alt="Adimen logo"/>
                    </div>
                    <span className="font-weight-light">Adimen</span>
                    <span className="font-weight-bold">Tecnologia</span>
                </a>
            </div> 
        </div>)
    }
}

export default NavBar