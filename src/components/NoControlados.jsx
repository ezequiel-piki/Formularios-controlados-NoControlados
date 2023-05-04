import React, { useRef } from 'react'

const NoControlados = () => {

  const form = useRef(null);

  const handleSubmit = (evento)=>{
    evento.preventDefault();
    console.log('me diste click');
    console.log(form);
  }

  return (
     
    <form onSubmit={handleSubmit} ref={form}>
        <input type="text" placeholder='Ingrese TODO' className='form-control mb-2' name='title'/>
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
       

    </form>
  )
}

export default NoControlados;