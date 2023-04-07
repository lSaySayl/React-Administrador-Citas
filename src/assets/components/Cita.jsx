import React, { Fragment } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";


const Cita = ({ cita, eliminarCita }) => {
    return (
        <Fragment>


            <div className='container'>


                <div>
                    <p>Mascota: <span>{cita.mascota}</span> </p>
                    <p>Dueño: <span>{cita.propietario}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Sintomas: <span>{cita.sintomas}</span> </p>
                </div>

                <button
                    onClick={() => eliminarCita(cita.id)}
                    className='btn-close'>
                    <RiCloseCircleLine className='icon' />
                </button>

            </div>





        </Fragment>

    );
}

export default Cita;
