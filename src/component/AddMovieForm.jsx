import React, { useState } from 'react'

export default function AddMovieForm({addmovie} ) {
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')
    const [url, setUrl] = useState()
    const [rating, setRating] = useState(0)
  
    const handlesubmit=(e)=>{
      e.preventDefault()
        addmovie(title,desc,url,rating)
    } 

  return (
    <form    onSubmit={handlesubmit}   >
        <label>title:</label>
        <input   className='input' onChange={(e)=>setTitle(e.target.value)}/>
        <label>description:</label>
        <input  className='input'  onChange={(e)=>setDescription(e.target.value)} />
        <label>url:</label>
        <input className='input' onChange={(e)=>setUrl(e.target.value)}  />
        <label>rating:</label>
        <input className='input'   type='number'  min={0} max={5} onChange={(e)=>setRating(e.target.value)}/>
        <button>save</button>
    </form>
  )
}
