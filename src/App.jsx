import { useState } from "react";
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadosPacientes from "./components/ListadosPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container  mx-auto mt-20">
      <Header
      
      />

      <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
      />

      <ListadosPacientes
      
        pacientes={pacientes}
      />
      </div>
     
    </div>
  )
}

export default App
