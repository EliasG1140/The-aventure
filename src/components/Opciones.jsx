function Opciones({opcionA , opcionB, handleClick}) {
  return (
    <div className="opciones">
      <div className="opcion">
        <button id="A" className="botones" onClick={handleClick}>A</button>
        <h2>{opcionA}</h2>
      </div>
      <div className="opcion">
        <button id="B" className="botones" onClick={handleClick}>B</button>
        <h2>{opcionB}</h2>
      </div>
    </div>
  );
}

export default Opciones;