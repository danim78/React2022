import React, { useState } from "react";
import { useForm } from "react-hook-form";

function HookForm(){
    const { register, handleSubmit, watch, formState:{errors} } = useForm()

    console.log(errors);

    const [nombre, setName] = useState("Nombre por defecto")

    const onSubmit = (data) => {
        console.log(data);
    }

    const showName = (e) => {
        e.preventDefault()
        setName(watch("nombre"))

    }

    return(
        <>
        <h1>{nombre}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Ingresar Nombre" 
                   type="text" {...register("nombre", { required: true })}/>
            {errors.nombre && <span>Éste elemento es requerido</span>}
            <input type="submit"/> 
        </form>
        <button onClick={showName}> Ver nombre </button>
        </>
    )

}

export default HookForm