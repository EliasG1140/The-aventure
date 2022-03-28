import React, { Component } from 'react'
import data from './../db/data.json'
import Opciones from './Opciones'
import Historial from './Historial'

class Contenedor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      historial: [],
      seleccionPrevia: ""
    }
  }
  
  handleClick = ({target}) => {
    let id = target.id;
    if(this.state.contador >= 7){alert('Ya no hay más historias \n ¡Gracias por jugar! \n Estudiante: Jaime Elias Garcia Alvarado')}
    else {
      if(this.state.contador === 0 && id === "A")this.setState({contador: this.state.contador + 1, seleccionPrevia: "A"})
      if(this.state.contador === 0 && id === "B")this.setState({contador: this.state.contador + 2, seleccionPrevia: "B"})
      if(this.state.seleccionPrevia === "A" && id === "A")this.setState({contador: this.state.contador +2, seleccionPrevia: "A"})
      if(this.state.seleccionPrevia === "A" && id === "B")this.setState({contador: this.state.contador +3, seleccionPrevia: "B"})
      if(this.state.seleccionPrevia === "B" && id === "B")this.setState({contador: this.state.contador +2, seleccionPrevia: "B"})
      if(this.state.seleccionPrevia === "B" && id === "A")this.setState({contador: this.state.contador +1, seleccionPrevia: "A"})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador){
      this.setState({
        historial: [...this.state.historial, this.state.seleccionPrevia]
      })
    }
  }

  render() { 
    return (
      <div className='layout'>
        <h1 className='historia'>{data[this.state.contador].historia}</h1>
        <Opciones opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b} handleClick={this.handleClick}/>
        <Historial historial={this.state.historial} seleccionPrevia={this.state.seleccionPrevia}/>
      </div>
    );
  }
}
 
export default Contenedor;