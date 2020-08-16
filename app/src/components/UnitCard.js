import React, {Component} from 'react'
import './styles/UnitCard.css'

class UnitCard extends Component {
    render() {
        const service = this.props.data
        let button
        if (service.Activo) button =  <a href={service.url}><button className="btn-primary boton">Ir a ..</button></a>
        return (<article className="tarjeta">
            <div className="destalle">
                <p className="titulo">{service.title}</p>
                <div className="etiqueta"></div>
                <p className="descripcion">{service.description}</p>
                {button}
            </div>
            <img className="imgCard" src={service.imagen}/>
        </article>)
    }
}

export default UnitCard