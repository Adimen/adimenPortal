import React, {Component} from 'react'
import './styles/UnitCard.css'

class UnitCard extends Component {
    render() {
        return (<article className="tarjeta">
            <div className="destalle">
                <p className="titulo">{this.props.data.title}</p>
                <div className="etiqueta"></div>
                <p className="descripcion">{this.props.data.description}</p>
            </div>
            <img className="imgCard" src={this.props.data.imagen}/>
        </article>)
    }
}

export default UnitCard