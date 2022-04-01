import React, { Component } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class Opciones extends Component {
  
  componentWillUnmount() {
    MySwal.fire({
      title: 'Felicidades!',
      text: 'Has terminado el juego',
      icon: 'success',
      confirmButtonText: 'Jugar de nuevo'
    }).then(result => {
      window.location.reload()
    })
  }

  render() {
    return (
      <div className="opciones">
      {Object.entries(this.props.opciones).map(([key, value], i) => {
        return (
        <div key={i} className="opcion">
            <button id={key} className="botones" onClick={this.props.handleClick}>{key.toUpperCase()}</button>
            <h2>{value}</h2>
        </div>
        )
      })}
    </div>
    )
  }
}