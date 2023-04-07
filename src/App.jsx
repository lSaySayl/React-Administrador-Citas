import { Fragment,useState, useEffect } from "react"
import Formulario from "./assets/components/Formulario"
import Cita from "./assets/components/Cita";


function App() {

  /* Citas en local storage */

  let citasIniciales = JSON.parse(localStorage.getItem("citas"))
  if(!citasIniciales) {
    citasIniciales = [];

  }

    //Arreglo de citas

    const [citas, guardarCitas] = useState(citasIniciales);

    //UseEffect para realizar operaciones cuando el state cambia. Siempre es arrow función

    useEffect(() => {
      if(citasIniciales) {
        localStorage.setItem("citas",JSON.stringify(citas));
      } else {
        localStorage.setItem("citas",JSON.stringify([]))
      }


    },[citas])

    


    //Función que toma las citas actuales y agrega las nuevas

    const crearCita = (cita) => {
      guardarCitas([
        ...citas,
        cita
      ])
    }

    //Función para eliminar las citas por su ID

    const eliminarCita = (id) => {
      const nuevasCitas = citas.filter(cita => cita.id !== id )
        guardarCitas(nuevasCitas)
    }

    //Mensaje condicional

    const titulo = citas.length === 0 ? "No hay citas"  : "Administrador de tus citas"

    

  return (

    <Fragment>
      

      <h1>Administrador de citas</h1>
        <div className="row">
        

          <div className="column">
         
            <Formulario
            crearCita = {crearCita} />
          </div>

          <div className="column">
          <h2>{titulo}</h2>

          {citas.map(cita => {
            return (
              <Cita
              key={cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
              />
            
             
            )
          })}

          </div>

        </div>





    </Fragment>
  )
}

export default App
