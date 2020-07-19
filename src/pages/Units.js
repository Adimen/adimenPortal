import React, {Component} from 'react'
import Banner from '../components/Banner'
import UnitList from '../components/UnitList'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Footer from '../components/Footer'

class Units extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            textBan: {
                title: 'Adimen Tecnologia',
                lema: 'Escoge la opcion que mas te acomode '
            }
        }
   //     console.log(`Construye {this.state.data} - {this.state.textBan} `)
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({loading: true, error: null})
        try {
            const data = await fetch('http://localhost:4001/api/getInformationCard-1.0')
            await data.json().then((res)=>{this.setState({loading: false, error: null, data: res})}).catch(console.log(error))
        } catch (err) {
            console.log('ERROR: ', err.message)
            this.setState({loading: false, error: err})
        }
    }
    render() {
        if (this.state.loading === true) {
            return (<div>
                <Banner text={{lema:'Estamos trayendo tus datos', title: 'CARGANDO.....'}}/>
                <Loading />
                <Footer />
            </div>)
        }
        if (this.state.error) {
            return (<div>
                    <Banner text={{lema: `${this.state.error.message}`, title: `ERROR: ${this.state.error.code}`}} />
                    <Error mensaje={this.state.error.mensaje} />
                    <Footer />
                </div>)
        }
        return(<div className="baseline">
                <Banner text={this.state.textBan}/>
                {console.log(`${this.state.data}`)}
                {this.state.data && <UnitList units={this.state.data}/>}
                <Footer />
            </div>)
    }
}

export default Units