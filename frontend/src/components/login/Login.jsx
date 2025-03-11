import React, { useState } from 'react'
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const Login = ( { setIsLogged }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email)
        console.log(password)
        try {
            const response = await fetch(`https://littleboxapi.azurewebsites.net/api/login?email=${email}&password=${password}`);
            if (!response.ok) {
                throw new Error('Error al conectar con la API');
            }
    
            const data = await response.json();
    
            console.log(data);
            if (data[0].Result === 1) {
                setIsLogged(true);
            } else {
                alert('Contraseña o usuario incorrecto');
            }
        } catch (error) {
            console.error('Error durante el login:', error);
            alert('Hubo un problema al conectarse con el servidor');
        }
    };
    

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 3,
                padding: 4,
                borderRadius: 2,
                backgroundColor: 'white'
                }}
            >
                <Typography variant="h5" component="h1" gutterBottom>
                    Iniciar Sesión
                </Typography>
        
                <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Correo electrónico"
                        type="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                    />
            
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
            
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </Box>
        </Container>
      );
};
  
export default Login;