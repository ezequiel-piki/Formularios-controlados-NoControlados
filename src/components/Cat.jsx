import React, { useState } from 'react'

const Cat = () => {
  
    const [cat, setCat] = useState({name:'', year:10});
    
    const handleClick = () => {
     setCat({...Cat, year: cat.year+1});
    }
    

    return (
    <>
    <h2>{cat.name} - {cat.year}</h2>
    <button onClick={handleClick} className='btn btn-info mb-2'>Update</button>
    </>
  )
}

export default Cat