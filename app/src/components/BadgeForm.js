import React, {Component} from 'react'

class BadgeForm extends Component {
    handleClick = (e) => {
        console.log("Guardado!!")
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado")
        console.log(this.state)
    }
    render() {
        return (<div>
            <h3>Registrar</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input className="form-control" type="text" name="firstName" onChange={this.props.onChange} value={this.props.formValues.value}/>

                    <label>Apellido</label>
                    <input className="form-control" type="text" name="lastName" onChange={this.props.onChange} value={this.props.formValues.value}/>

                    <label>Email</label>
                    <input className="form-control" type="email" name="email" onChange={this.props.onChange} value={this.props.formValues.value}/>

                    <label>Cargo</label>
                    <input className="form-control" type="text" name="jobTitle" onChange={this.props.onChange} value={this.props.formValues.value}/>

                    <label>Twitter</label>
                    <input className="form-control" type="text" name="twitter" onChange={this.props.onChange} value={this.props.formValues.value}/>
                    <button className="btn btn-primary" onClick={this.handleClick}>Guardar</button>
                </div>
            </form>
        </div>)    
    }
}

export default BadgeForm