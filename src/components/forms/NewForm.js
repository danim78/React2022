import { useState, useRef, useEffect } from "react"

//useRef : hook podemos usar para:
//acceder a un elemento del DOM
//obtener y guardar valores sin tener que  re-renderizar el componente

function NewForm(){
    //eslint-disbale-next-line react-hooks/rules-of-hooks
    const inputName = useRef()
    console.log(inputName.current?.value);
    const enviar = (e) => (
        console.log(inputName.current?.value)
    )

    /*const [nombre, setNombre] = useState('')

     const enviar = (e) => {
        e.preventDefault()
        console.log(nombre) 
    }*/

    useEffect(() => {
        inputName.current.focus()
    })

    return(
        <>
            <div className="container">
            <h1 className="mt-5">Formularios</h1>                
                <input type="text" value={inputName.current?.value} 
                    ref={inputName}
                    /* onChange={(e) => setNombre(e.target.value)}  */
                    placeholder="Ingresar Nombre"/>

            </div>
            <button type="submit" onClick={enviar}>Enviar</button>
        </>
    )
}

export default NewForm