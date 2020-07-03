import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../public/img/cyber-3400789__480_webp.jpg'
import BadgeList from '../components/BadgeList'
import '../components/styles/Badges.css'

class Badges extends Component {
    constructor(props) {
        this.state={
            data: []
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({data: [{
                id: 1,
                firstName: 'Cesar',
                lastName: 'Avila'
            },
            {
                id: 2,
                firstName: 'Peter',
                lastName: 'Katauch'
            },
            {
                id: 3,
                firstName: 'Hans',
                lastName: 'Kruger'
            },
            {
                id: 4,
                firstName: 'Maria Joaquina',
                lastName: 'La del Barrio'
            }]})
        }, 3000)
    }
    render() {
        return (<React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                    <img className="Badges__conf-logo" src={Logo} alt="logo"/>
                    </div>
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badge/new" className="btn btn-primary">Nuevo Badge</Link>
                </div>
            </div>
            <div className="Badges__list">
                <div className="Badges_container">
                    <BadgeList badges={this.state.data} />
                </div>
            </div>
        </React.Fragment>)
    }
}

export default Badges