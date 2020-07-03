import React, {Component} from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends Component {
    state = {form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }}
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (<React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge firstName={this.state.form.firstName} lastName={this.state.form.lastName} cargo={this.state.form.jobTitle} twitter={this.state.form.twitter} email={this.state.form.email} avatarUrl="https://www.gravatar.com/avatar/0000000" />
                    </div>
                    <div className="col-6">
                        <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                    </div>
                </div>
            </div>
        </React.Fragment>)
    }
}

export default BadgeNew