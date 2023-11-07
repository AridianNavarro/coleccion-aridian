//Aridian Navarro Remedios
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "../store/storelogin";
import { Button } from "@mui/material";
import { useEffect } from 'react'

function Home() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector(state => state.login)
  const isLoggedin = userData.isAutenticated;

  useEffect(()=>{
    if (!isLoggedin){ 
        navigate('/')
    }
    }, [isLoggedin, navigate])

 
    console.log('Datos del usuario en el store:', userData)
    const handleLogout = (e) => {
      
      dispatch( loginActions.logout() );
      navigate('/');
};


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

export default Home