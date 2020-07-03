import React, {Component} from 'react'
import UnitCard from './UnitCard'
import Footer from './Footer'
import './styles/UnitList.css'

class UnitList extends Component {
    render() {
        return(<React.Fragment>
        <ul className="list-unstyled">
            {this.props.units.map((unit) => {
                return (<li key={unit.id}><UnitCard data={unit}/></li>)
            })}
        </ul>
        <Footer />
        </React.Fragment>)
    }
}

export default UnitList