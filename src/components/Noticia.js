function Noticia(props) {
        
    const noticia = {
        titulo : "Curso react 2022",
        descripcion:"esto es una demostración de desestructuración de objetos"
    }
      
    const {titulo, descripcion} = noticia

    const increment = () => {
        console.log("increment");
    }
      
    return (
        <div className="mi-clase">
            <button onClick={ increment }>+</button> {/* props.handleClick */}
            <h1 className='mi-titulo'>Mi noticia: {titulo} - {descripcion}</h1>
            <h1 className='mi-titulo'>Mi noticia: {props.cont}</h1>
        </div>
    )
}

export default Noticia
      