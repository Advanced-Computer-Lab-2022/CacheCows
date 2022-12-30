import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { set } from 'mongoose';

export default function NewInput() {
    function empty(){
        if()
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          onChange={() => set()}
          value={}
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
      </div>
    </Box>
  );
}