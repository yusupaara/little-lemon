import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextFields() {
    return (
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Comments (Optional)"
            multiline
            rows={4}
            defaultValue=""
            sx={{ width: 450}}
          />
        </div>
    );
  }