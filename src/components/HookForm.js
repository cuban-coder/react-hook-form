import React, {Fragment} from 'react'

import {useForm} from 'react-hook-form'

const HookForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e) => {
        console.log(data)
        e.target.reset()
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" 
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required:{
                                value:true,
                                 message: 'Título obligatorio'
                                },
                            maxLength:{
                                value:5,
                                message:'No más de 5 caracteres'
                            },
                            minLength: {
                                value: 2,
                                message: 'Mínimo 2 caracteres'
                            }
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
      );
}
 
export default HookForm;