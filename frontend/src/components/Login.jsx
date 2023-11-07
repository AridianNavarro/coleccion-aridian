//Aridian navarro remedios
// Importación de módulos y componentes necesarios
import React, { useState } from 'react';
import { Avatar, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';// Permite despachar acciones a Redux
import { useNavigate } from 'react-router-dom';// Permite la navegación en la aplicación
import { loginActions } from '../store/storelogin';// Acciones relacionadas con el inicio de sesión

// Definición del componente de inicio de sesión
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Placed navigate here

    // Estado local para almacenar los datos de inicio de sesión
    const [login, setLogin] = useState({ user: '', pass: '' });

    // Función para verificar las credenciales del usuario
    const isVerifiedUser = () => {
        // Realiza una llamada a la API para verificar las credenciales
        fetch(`http://localhost:3030/login?user=${login.user}&password=${login.pass}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    if (Object.keys(response.data).length === 0) {
                        console.log('Datos incorrectos');
                    } else {
                        // Despacha la acción de inicio de sesión con Redux
                        console.log(response);
                        dispatch(loginActions.login({
                            name: response.data.nombre,
                            rol: response.data.rol
                        }));
                        // Navega a la página de inicio
                        navigate('/home');
                    }
                }
            });
    };
    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.user.length !== 0 && login.pass.length !== 0) {
            // Función para manejar el envío del formulario
            fetch(`http://localhost:3030/login?user=${login.user}&password=${login.pass}`)
                .then(response => response.json())
                .then(response => {
                    if (response) {
                        if (Object.keys(response.data).length === 0) {
                            console.log('Datos incorrectos');
                        } else {
                            console.log(response);
                            if (response.data !== undefined) {
                                console.log('entro, hago el dispatch y luego navego');
                                dispatch(loginActions.login({
                                    name: response.data.nombre,
                                    rol: response.data.rol
                                }));
                                
                               // Navega a la página de inicio
                                navigate('/home');
                            }
                        }
                    }
                });
            console.log(`http://localhost:3030/login?user=${login.user}&password=${login.pass}`);
        } else {
            console.log('Campos vacios.');
        }
    };

        // Renderizado del componente de inicio de sesión
    return (
        <Grid container justifyContent={'center'} alignItems={'center'} style={{ minHeight: '100vh' }}>
            <Grid item xs={3} md={3} l={2} xl={2}>
                <Paper>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Avatar>
                            <LockIcon color="divider" />
                        </Avatar>
                        <Box component={'form'} onSubmit={handleSubmit}>
                            <Typography variant="h2" color="primary">
                                Login
                            </Typography>
                            <TextField
                                id="usuario"
                                label="usuario"
                                fullWidth
                                autoFocus
                                onChange={(e) => {
                                    setLogin({ ...login, user: e.target.value });
                                }}
                            />
                            <TextField
                                id="contrasena"
                                label="contraseña"
                                type="password"
                                fullWidth
                                onChange={(e) => {
                                    setLogin({ ...login, pass: e.target.value });
                                }}
                            />
                            <Button id="boton" type="submit">
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}
// Exporta el componente de inicio de sesión
export default Login;
