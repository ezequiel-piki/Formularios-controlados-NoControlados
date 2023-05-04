import React, { useRef, useState } from 'react'

const NoControlados = () => {

  const form = useRef(null);
  const [error, setError] = useState('');
 
  const handleSubmit = (evento)=>{
    
    evento.preventDefault();
    
    //Ponemos al principio de nuestro metodo setError('') para limpiar el formulario
    setError('');

    //Capturar los datos del formulario como un Objeto
    const data = new FormData(form.current);
    const dataObject = Object.fromEntries([...data.entries()]);
    
    //console.log(dataObject.title, dataObject.description, dataObject.state);

    //Validación de los datos del formulario
    
    //Titulo TODO
    if(dataObject.title.trim() === '') return setError('Llena el campo titulo');
    
    //Description TODO
    if(dataObject.description.trim() === '') return setError('Llena el campo description');
    
    //State TODO
    if(dataObject.state.trim() === '')  return setError('Llena el campo state');
  }

  return (
     
    <form onSubmit={handleSubmit} ref={form}>
        <input 
        type="text" 
        placeholder='Ingrese TODO' 
        className='form-control mb-2' 
        name='title' 
        defaultValue='TODO #01'/>
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese descripción"
          name="description"
          defaultValue="Descripción tarea #01"
        />
         <select
          className="form-select mb-2"
          name="state"
          defaultValue="completado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button
          className="btn btn-primary"
          type="submit"
        >
          Agregar
        </button>
       {
         error !== '' && error
       }

    </form>
  )
}

export default NoControlados;