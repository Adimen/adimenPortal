import React, {Component} from 'react'
import Banner from '../components/Banner'
import { throwStatement } from '@babel/types'

class NotFound extends Component {
    state = {
        textBan: {
            title: '404',
            lema: 'Pagina no encontrada/Page not found'
        }
    }
    render() {
        return (<Banner text={this.state.textBan}/>)
    }
}

export default NotFound