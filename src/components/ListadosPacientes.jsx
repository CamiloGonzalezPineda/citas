import Paciente from "./Paciente"

const ListadosPacientes = ({pacientes}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-pink-400 font-bold">Pacientes y Citas
        </span>
      </p>

      {pacientes.map( paciente => (
        <Paciente
        paciente={paciente}
        />
          
              ))}

      
      

    </div>
  )
}

export default ListadosPacientes