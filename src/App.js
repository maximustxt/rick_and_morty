import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards'
import { useState } from 'react'
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import About from './components/About/About';
import Detail from "./components/Detail/Detail";
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favoritos/Favorites';


function App () {

  
  const [characters,setcharacters] = useState([]);
  const onSearch = (id)=>{
    const URL = "https://be-a-rym.up.railway.app/api";
    const KEY = "2fed7cd4836b.dab7726779e7348bd5ea"; // 2fed7cd4836b.dab7726779e7348bd5ea
    
    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setcharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }
  const onClose = (id) => {
    setcharacters(characters.filter(char => char.id !== id));
  }
  
  
  const [access , setaccess] = useState(false);
  const navigate = useNavigate();
  
  const username = "ignamartin361@gmail.com";
  const password = "Ignacio123";
  
  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setaccess(true);
      navigate('/home');

    } else {
      alert("credenciales incorrectas");
    }
  }
  
useEffect(() => {
  !access && navigate('/');
}, [access]);


const {pathname} = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      {pathname !== "/" && <Nav onSearch = {onSearch} />} {/*Esto es lo que siempre se va a mantener en todos los servidores vigente , pero usamos el hook useLocation para obtener una propiedad que es el nombre de una ruta , la usamos como condicion diciendole que si pathname mo es igual que la ruta de nuestra querido formulario , entonces que se muestre nav en el resto de rutas menos en ese..*/}
      <Routes>
        <Route path='/favorites' element={<Favorites/>} ></Route>
      <Route path='/about' element={<About/>} /> 
      <Route path='/home' element={<Cards
      characters={characters}
      onClose ={onClose}
      />}/> 
      <Route path='/detail/:detailId'element={<Detail/>} /> 
      <Route path='/' element={<Form login = {login}/>} /> 
      </Routes> 
    </div>
  )
}
{/*le estamos pasando otra props => {character: y onClose:}*/}
export default App
