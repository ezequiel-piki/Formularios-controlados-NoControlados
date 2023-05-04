 

const FormularioControlado = () => {


  const handleSubmit = (evento)=>{
    
    evento.preventDefault();
    
  }

  return (
     
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder='Ingrese TODO' 
        className='form-control mb-2' 
        name='title' 
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese descripción"
          name="description"
        />
         <select
          className="form-select mb-2"
          name="state"
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

export default FormularioControlado;