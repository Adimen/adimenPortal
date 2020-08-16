import React, {Component} from 'react'
import './styles/Footer.css'

class Footer extends Component {
    render() {
        return(<footer className="footer__container">
            <div className="footer__info">
                <p>Todos los derechos reservados, estamos mejorando nuestro servicio.</p>
                <p>Si quieres contactarte con nuestro servicio de soporte puedes abrir un ticket en nuestro canal de zendesk</p>
            </div>
        </footer>)
    }
}

export default Footer