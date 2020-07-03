import React, {Component} from 'react'
import Liston from './Liston'
import './styles/Banner.css'

class Banner extends Component {
    render() {
        return (<div className="Banner">
            <p className="SuperText">{this.props.text.lema}<span className="spanText">{this.props.text.title}</span></p>
            <Liston />
        </div>)
    }
}

export default Banner