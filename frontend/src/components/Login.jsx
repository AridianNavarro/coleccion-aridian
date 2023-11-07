//Aridian navarro remedios
import React, { useState } from 'react';
import { Avatar, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from '../store/storelogin';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Placed navigate here

    const [login, setLogin] = useState({ user: '', pass: '' });

    const isVerifiedUser = () => {
        fetch(`http://localhost:3030/login?user=${login.user}&password=${login.pass}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    if (Object.keys(response.data).length === 0) {
                        console.log('Datos incorrectos');
                    } else {
                        console.log(response);
                        dispatch(loginActions.login({
                            name: response.data.nombre,
                            rol: response.data.rol
                        }));
                        navigate('/home');
                    }
                }
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.user.length !== 0 && login.pass.length !== 0) {
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

export default Login;
