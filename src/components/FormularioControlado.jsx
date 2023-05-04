import { useState } from "react";

 

const FormularioControlado = () => {

  
  
  const [todo, setTodo] = useState({
    title      : 'TODO #01',
    description: 'Desc #01',
    state      : 'pendiente'
  });

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [state,setState] = useState('pendiente');

  const handleSubmit = (evento)=>{
    evento.preventDefault();
    console.log(todo.title, todo.description, todo.state);
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    console.log('e.target.name',e.target.name)
    setTodo({...todo, :e.target.value});
  }

  return (
     
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder='Ingrese TODO' 
        className='form-control mb-2' 
        name='title' 
        value={todo.title}
        onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese descripción"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
         <select
          className="form-select mb-2"
          name="state"
          value={todo.state}
          onChange={handleChange}
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