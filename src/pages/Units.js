import React, {Component} from 'react'
import Banner from '../components/Banner'
import UnitList from '../components/UnitList'
import Loading from '../components/Loading'

class Units extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            textBan: {
                title: 'Adimen Tecnologia',
                lema: 'Esto es un Banner de '
            }
        }
        console.log(`Construye {this.state.data} - {this.state.textBan} `)
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({data: [{
                    id: 1,
                    title: "CloudOps - Devops",
                    description: "Coaching para llevar tus procesos a Devops y migrar tus sistemas a la nube",
                    imagen: './assets/img/74b0a198831708279472402aecb63dbd.jpg',
                },
                {
                    id: 2,
                    title: "Inteligencia Artificial y Maching Learning",
                    description: "Enseñale a tus servidores a que trabajen por ti.",
                    imagen: './assets/img/5bcabd294e2f0f736356ba5189d6fbba.jpg',
                },
                {
                    id: 3,
                    title: "Internet de las cosas",
                    description: "Convierte tu casa en un hogar inteligente, programalo de acuerdo a tus horarios.",
                    imagen: './assets/img/c2aec8d277517104ccbb9a925a09ea4b.jpeg',
                },
                {
                    id: 4,
                    title: "Automatizacion y robotica",
                    description: "Automatiza tus procesos, o si necesitas robotizar algun proceso, imaginate tener tu propio androide.",
                    imagen: './assets/img/eaa1a28408375fc447e4acc7dd86916d.jpg'
                },
                {
                    id: 5,
                    title: "Block Chain",
                    description: "Si quieres tener tu propia cripto moneda, o firmar un documento legal de forma segura",
                    imagen: './assets/img/ff44bea842941845681b9df398ce6bfd.jpg'
                },
                {
                    id: 6,
                    title: "Cyberseguridad",
                    description: "Para que te sientas seguro, implementamos y analizamos la seguridad de tus dispositivos, aplicaciones y tecnologias",
                    imagen: './assets/img/ae3c61621328a002488ae38811d20bce.png'
                },
                {
                    id: 7,
                    title: "Impresion 3D, Fabricacion Aditiva",
                    description: "Creamos componentes, si necesitas alguna pieza especial para tu negocio, te construimos los componente que necesites en manufactura aditiva",
                    imagen: './assets/img/ffb03741a1c43824ae9422f74a2cf103.png'
                }],
                loading: false
            })
        }, 1500)
        this.fetchData()
    }
    fetchData = () => {
        this.setState({loading: true, error: null})
        try {
            const data = []
            this.setState({loading: true, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }
    render() {
        if (this.state.loading === true) {
            return (<div>
                <Banner text={{lema:'Estamos trayendo tus datos', title: 'CARGANDO.....'}}/>
                <Loading />
            </div>)
        }
        if (this.state.error) {
            return (<div>
                    <Banner text={{lema:`{this.state.error}`, title:'ERROR: 404'}} />
                    <Error />
                </div>)
        }
        return(<div className="baseline">
                <Banner text={this.state.textBan}/>
                <UnitList units={this.state.data}/>
            </div>)
    }
}

export default Units