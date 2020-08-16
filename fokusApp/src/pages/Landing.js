import React, {Component} from 'react'
import './styles/Landing.css'

class Landing extends Component {
    render() {
        return(<section className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card-body land__card">
                        <h5 className="card-title">Mision</h5>
                        <p className="card-text">Define la mision y donde quieres llegar en los proximos dos o tres años.</p>
                        <a href="#" className="btn btn-primary">Comencemos!</a>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default Landing