import React, { Component } from 'react'
import dataJson from './../db/data.json'
import Opciones from './Opciones'
import Historial from './Historial'

class Contenedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 1,
      seleccionPrevia: '',
      historial: [],
      data: dataJson[0]
    }
  }

  handleClick = ({target}) => {
    this.setState({
      contador: this.state.contador + 1,
      seleccionPrevia: (target.id).toUpperCase()
    })
    console.log(this.state.data);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contador !== this.state.contador) {
      this.setState({
        data: dataJson.find(e => e.id === `${this.state.contador}${this.state.seleccionPrevia.toLowerCase()}`),
        historial: [...this.state.historial, this.state.seleccionPrevia]
      })
    }
  }

  render() { 
    return (
      <div className='layout'>
        <h1 className='historia'>{this.state.data ? this.state.data.historia : "Fin"}</h1>
        {this.state.data ? <Opciones opciones={this.state.data.opciones} handleClick={this.handleClick}/> : null}
        <Historial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
      </div>
    );
  }
}
 
export default Contenedor;