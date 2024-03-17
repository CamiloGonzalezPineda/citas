
const Paciente = ({paciente}) => { 

const {Nombre,Propietario, Email, Alta, Sintomas}=paciente
  return (
    <div className=" mx-5 bg-white shadow-md px-5 py-10 rounded-xl m-4">
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Nombre: {""}
      <span className="font-normal normal-case">
        {Nombre}
      </span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Propietario: {""}
      <span className="font-normal normal-case">
        {Propietario}
      </span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Email: {""}
      <span className="font-normal normal-case">

      {Email}

      </span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Alta: {""}
      <span className="font-normal normal-case">

       {Alta}

      </span>
    </p>

    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Sintomas: {""}
      <span className="font-normal normal-case">
        
      {Sintomas}

      </span>
    </p>
  </div>
  )
}

export default Paciente