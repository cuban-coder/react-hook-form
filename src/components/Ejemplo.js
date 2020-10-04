import React, { Fragment, useState } from 'react';

import {useForm} from 'react-hook-form'

const Ejemplo = () => {

    const {register, errors, handleSubmit} = useForm();
    const [entradas, setEntradas] = useState([])

    const onSubmit = (data,e) => {
        console.log(data)
        setEntradas([
            ...entradas,
            data
        ])
        e.target.reset()
    }

    return ( 
        <Fragment>
            <h1>Ejemplo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                 type="text"
                 name= "titulo"
                 placeholder="Ingrese el título"
                 className="form-control my-2"
                 ref = {
                     register({
                         required: {value: true, message: 'Campo obligatorio'},
                         minLength: {value: 2, message: 'Mínimo dos letras'}
                     })
                 }
                 />
                 <span className="text-danger text-small d-block mb-2">
                     {errors?.titulo?.message}
                 </span>
                 <input
                 type="text"
                 name= "description"
                 placeholder="Ingrese la descripción"
                 className="form-control my-2"
                 ref = {
                    register({
                        required: {value: true, message: 'Campo obligatorio'},                       
                    })
                }
                 />
                 <span className="text-danger text-small d-block mb-2">
                     {errors?.description?.message}
                 </span>
                 <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                entradas.map(entrada => 
                <li>{entrada.titulo}-{entrada.description}</li>
                )
                }
            </ul>
        </Fragment>
     );
}
 
export default Ejemplo;


