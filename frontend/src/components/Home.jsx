//Aridian Navarro Remedios
// Importación de módulos y componentes necesarios
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux'// Selecciona el estado del store de Redux
import { useDispatch } from "react-redux";// Permite despachar acciones a Redux
import { useNavigate } from "react-router-dom";// Permite la navegación en la aplicación
import { loginActions } from "../store/storelogin";// Acciones relacionadas con el inicio de sesión
import { Button } from "@mui/material";
import { useEffect } from 'react'

// Definición del componente Home

function Home() {

  const dispatch = useDispatch()// Inicializa el hook de Redux
  const navigate = useNavigate()// Inicializa el hook de navegación
  const userData = useSelector(state => state.login)// Almacena el estado del usuario desde el store de Redux
  const isLoggedin = userData.isAutenticated;// Verifica si el usuario ha iniciado sesión

    // Efecto secundario para redirigir al usuario si no ha iniciado sesión
  useEffect(()=>{
    if (!isLoggedin){ 
        navigate('/')
    }
    }, [isLoggedin, navigate])

    // Función para manejar el cierre de sesión
    console.log('Datos del usuario en el store:', userData)
    const handleLogout = (e) => {
      
      dispatch( loginActions.logout() );
      navigate('/');
};

  // Renderizado del componente Home
    return (
      <div>
        <Typography variant="h1">Página home de Aridian y Navarro</Typography>
        <Typography variant="h2">
        {userData.userName} Rol: {userData.userRol}!
        </Typography>
        <Button variant="contained" onClick={handleLogout}>
          Salir
        </Button>
      </div>
    );
}
// Exporta el componente Home
export default Home