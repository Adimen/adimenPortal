import React, {Component} from 'react'
import './styles/Badge.css'
import { tsMethodSignature } from '@babel/types'

class Badge extends Component {
    render() {
        return (<div className="Badge">
            <div className="Badge__header">
               <img src="" alt="Logo Evento" />
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="Gravatar" />
                <h1>{this.props.firstName}<br />{this.props.lastName}</h1>
            </div>
            <div className="Badge__info">
                <p>{this.props.cargo}</p>
                <p>@{this.props.twitter}</p>
            </div>
            <div className="Badge__footer">
                #Adimen
            </div>
        </div>)
    }
}

export default Badge