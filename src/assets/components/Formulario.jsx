import React, { Fragment } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({crearCita}) => {

    //Crear State de cita

    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""

    });

    //State para error

    const [error, setError] = useState(false);



    //Función que se ejecuta cada que un usuario escribe en el input

    const actualizarState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value

        })

    }

    //Extraer valores. Me sirve para resetear

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Enviar formulario

    const submitCita = (e) => {
        e.preventDefault();

        //Validar

        if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {

            setError(true);

            return;
        }

        //Eliminar mensaje de error
        setError(false);

        //Asignar id = key;

        cita.id = uuidv4();


        //Crear cita = poner en el state inicial
        crearCita(cita)


        //Reiniciar el form

        setCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
    
        })


    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className='alerta'>Todos los campos son obligatorios</p> : null}

            

            <form
                onSubmit={submitCita}
            >

            



                <section className='container-input'>
                    <label>Nombre de Mascota</label>
                    <input
                        type='text'
                        name='mascota'
                        onChange={actualizarState}
                        value={mascota}

                    />
                </section>



                <section className='container-input'>
                    <label>Nombre propietario</label>
                    <input
                        type='text'
                        name='propietario'
                        onChange={actualizarState}
                        value={propietario}
                    />

                </section>

                <section className='container-input'>
                    <label>Fecha</label>
                    <input
                        type='date'
                        name='fecha'
                        onChange={actualizarState}
                        value={fecha}

                    />

                </section>

                <section className='container-input'>

                    <label>Hora</label>
                    <input
                        type='time'
                        name='hora'
                        onChange={actualizarState}
                        value={hora}
                    />


                </section>

                <section className='container-input'>
                    <label>Síntomas</label>
                    <textarea
                        name='sintomas'
                        onChange={actualizarState}
                        value={sintomas}
                    ></textarea>

                </section>


                <button
                    type='submit'
                    className=''>
                    Agregar cita

                </button>

                

            </form>

            


        </Fragment>

    );
}

export default Formulario;


