import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import NavBar from './components/NavBar'
import styled from 'styled-components'
import { useState, useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import Detail from './components/Detail'
import About from './components/About'
import Error from './components/Error'
import Form from './components/Form'
import { useLocation, useNavigate } from 'react-router-dom'

const Estrellas=styled.div`
background-image:url(https://www.todofondos.net/wp-content/uploads/40-fondos-de-pantalla-de-super-hd-galaxy.-imagen-de-galaxia-scaled.jpg); backgound-size:100%
`;
function App () {
  const location=useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const username = 'jorge@gmail.com';
  const password = 'Jorge123';

  const [access, setAccess] = useState(false);

  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
 }

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))

  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  return (
     
    // <div className='App' style={{ padding: '25px' }}>
    
    //    <div>
    //  <NavBar onSearch={onSearch}/>
    //    </div>
  
    //   <div>
    //     <Cards
    //       characters={characters}
    //       onClose={onClose}
    //     />
    //   </div>
    // </div>
    // </Estrellas>
    <div>
      <Estrellas>
      {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
      <Routes>
         <Route exact path="/" element={<Form/>}/>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:detailId" element={<Detail/>}/>
         <Route path='*' element={<Error/>}/>
        

      </Routes>

      </Estrellas>
    </div>

  )
}

export default App
