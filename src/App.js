import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import AddMovieForm from './component/AddMovieForm';
import moviesData from './services/data';
import './App.css';


function App() {
  const [datamovies, setmovies] = useState(moviesData)

  function filter(title){
    setmovies(datamovies.filter(el=>el.title.toLowerCase().includes(title.toLowerCase())))
  }
  function filterrating(rating){
    setmovies(datamovies.filter(el=>el.rating>=rating))
  }
 function addmovie(title,desc,url,ratin){
  console.log(title,desc,url,ratin)
  setmovies([...datamovies,{id:datamovies.length+1,title,desc,url,ratin}])
}

  return (
    <div>
      <Filter  filter={filter}  filterrating={filterrating} />
     <MovieList   data={datamovies}  />
     <AddMovieForm  addmovie={addmovie}  />

    </div>
  )
}

export default App;
