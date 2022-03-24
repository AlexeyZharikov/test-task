import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {

  return (
      <Box
          // component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
      <div>
        <TextField
          onChange={props.onChange}
          required
          id="outlined-required"
          value={props.value}
          label={props.label}
        />
      </div>
      </Box>

      );
    }
