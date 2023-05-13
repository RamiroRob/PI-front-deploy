import React, { useEffect } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import { getVideogames } from './redux/actions'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import TarjetaDetail from './components/TarjetaDetail/TarjetaDetail';
import CreateGame from './components/CreateGame/CreateGame';
 
// TODO: agregar una alerta de que no se encuentra el juego si no hay nada

function App() {

  const dispatch = useDispatch()

  /* -------------------------------------------------------------- */
  /* Traigo los juegos aca para que carguen mas rapido              */
  /* -------------------------------------------------------------- */
  
  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = () => {
    axios.get('http://localhost:3001/videogames')
      .then(res => res.data)
      .then(res => {
        dispatch(getVideogames(res))
      })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/videogame/:id" element={<TarjetaDetail/>} />
        <Route path="/create-videogame" element={<CreateGame/>} />
      </Routes>
    </div>
  );
}

export default App;
