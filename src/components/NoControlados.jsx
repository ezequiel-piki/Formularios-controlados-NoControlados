import React from 'react'

const NoControlados = () => {
  return (
     
    <form>
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
        <img src="" alt="" />

    </form>
  )
}

export default NoControlados;