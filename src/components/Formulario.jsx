import {useState,useEffect} from 'react';
import Error from './Error';
  const Formulario = ({pacientes,setPacientes}) => {
      const[ Nombre, setNombre]= useState('');
      const[ Propietario, setPropietario]= useState('');
      const[ Email, setEmail]= useState('');
      const[ Alta, setAlta]= useState('');
      const[ Sintomas, setSintomas]= useState('');

      const [error, setError]= useState(false);

      const handleSubmit =(e) => {
        e.preventDefault();

        //Validacion del Formulario
        if ([Nombre,Propietario,Email,Alta,Sintomas].includes('')){
          console.log('Hay al menos un campo vacio')

              setError('true')
              return;
        }
        setError(false)

        //Objeto paciente

        const objetoPaciente ={
          Nombre,
          Propietario,
          Email,
          Alta,
          Sintomas
        };

       // console.log(objetoPaciente)

        setPacientes([...pacientes,objetoPaciente]); 

        //Reiniciar el formulario
         setNombre('')
         setPropietario('')
         setEmail('')
         setAlta('')
         setSintomas('')
          }
  
  return (
    <div className="md:w-1/2 lg:h-2/5 mx-5">
      <h2 className="font-black text-2xl text-center">Seguimiento
        Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade Paciente y {""}
        <span className="text-blue-400 font-bold">Administralos</span>
      </p>
       
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-l py-10 px-5 mb-10"
      >
        {error && <Error> <p>Todos los campos son Obligatorios</p></Error> }

        <div className="mb-4">
          <label htmlFor="mascota" className="block text-gray-700 uppercase
          font-bold">
          Nombre de mascotas
          </label>

          <input id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Nombre}
            onChange={(e)=> setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="propietario" className="block text-gray-700 uppercase
          font-bold">
          Nombre de Propietario
          </label>

          <input id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Propietario}
            onChange={(e)=> setPropietario(e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 uppercase
          font-bold">
           Email          
          </label>

          <input id="email"
            type="text"
            placeholder="Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
         />
        </div>
        <div className="mb-4">
          <label htmlFor="alta" className="block text-gray-700 uppercase
          font-bold">
            Alta
          </label>

          <input id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={Alta}
            onChange={(e)=> setAlta(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase
          font-bold">
            Sintomas
          </label>
          <textarea
          id="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los sintomas de su mascota"
          value={Sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          />

        </div>
        <input type="submit"
        className="bg-blue-400 w-full text-white uppercase font-bold
        hover:bg-blue-700  cursor-pointer transition-colors"
        value="Agregar Paciente"

        />
      </form>
    </div>
  )
}
export default Formulario