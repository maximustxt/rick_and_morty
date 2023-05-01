import "./App.css";
import { Login } from "./redux/actions";
import Cards from "./components/Cards/Cards";
import { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favoritos/Favorites";
import Registro from "./components/Registro/Registro";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

function App() {
  const idUser = useSelector((state) => state.idUser);
  const [characters, setcharacters] = useState([]);

  const FuncionCharRandom = async () => {
    const inicioChar = 1;
    const FinChar = 826; // cantidad de personajes en total.

    const idCharRandom = inicioChar + Math.floor(Math.random() * FinChar);

    const response = await axios.get(
      `http://localhost:3001/onsearch/${idCharRandom}`
    );

    setcharacters(
      characters.includes(response.data)
        ? characters
        : [...characters, response.data]
    );
  };

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setcharacters((oldChars) => [...oldChars, data]);
        } else {
          swal({
            text: "No hay personajes con ese ID",
            icon: "warning",
            buttons: "Aceptar",
          });
        }
      });
  };
  const onClose = (id) => {
    setcharacters(characters.filter((char) => char.id !== id));
  };

  const [access, setaccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/*Esto es lo que siempre se va a mantener en todos los servidores vigente , pero usamos el hook useLocation para obtener una propiedad que es el nombre de una ruta , la usamos como condicion diciendole que si pathname mo es igual que la ruta de nuestro querido formulario , entonces que se muestre nav en el resto de rutas menos en ese..*/}
      <Routes>
        <Route path="/Favorites" element={<Favorites />}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={
            <Cards
              FuncionCharRandom={FuncionCharRandom}
              idUser={idUser}
              characters={characters}
              onClose={onClose}
              onSearch={onSearch}
              setcharacters={setcharacters}
            />
          }
        />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/" element={<Inicio FuncionInicio={FuncionInicio} />} /> */}
        <Route
          path="/"
          element={
            <Form setcharacters={setcharacters} characters={characters} />
          }
        />
      </Routes>
    </div>
  );
}
{
  /*le estamos pasando otra props => {character: y onClose:}*/
}
export default App;
