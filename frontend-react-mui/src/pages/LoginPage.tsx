import React from 'react'

//IMPORTING MUI LIBS:
import {Box, Typography, TextField, Button} from '@mui/material/';
import { hover } from '@testing-library/user-event/dist/hover';



const LoginPage = () => {
  return (
    <div>
      <form action="">
        <Box 
        display = "flex" 
        flexDirection={"column"} 
        maxWidth = {400} 
        alignItems="center" 
        justifyContent={"center"} 
        margin="auto" 
        marginTop={5} 
        padding={'50px'} 
        borderRadius={5} 
        boxShadow={'5px 5px 10px #ccc'}
        sx={{":hover":{
          boxShadow:'10px 10px 20px #ccc'
        }}}>
          <Typography 
          variant='h3'
          padding= {3}
          textAlign = "center">LOGIN</Typography>
          <TextField label="Email" variant="outlined" multiline placeholder='Enter email address' margin='normal' fullWidth color='error' />
          <TextField type="password" label="Password" variant="outlined" multiline placeholder='Enter password' margin="normal" fullWidth color='error' id="outlined-password-input" />
          <Button variant ="contained" color="error" size="large">Login</Button>  
        </Box>

      </form>
    </div>
  )
}

export default LoginPage