import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

export default function InputAdornments(props) {
  const [values, setValues] = React.useState("");

  const handleChange = (event) => {
    setValues( event.target.value );
  };


  return (
      
        <FormControl fullWidth  variant="outlined"  >
             <FormHelperText id="outlined--helper-text">{props.text}</FormHelperText>
          <OutlinedInput sx={{ background : "white"}}
            id={`outlined-adornment-${props.unique}`}
            value={values}
            size="small"
            multiline
            maxRows={props.row}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end"> 
               <IconButton  onClick={()=>{ setValues("") ; props.fun(values)}} size="small" aria-label="share">
                    <SendIcon  fontSize="small" />
               </IconButton>
             </InputAdornment>}
            aria-describedby={`outlined-${props.unique}-helper-text`}
            inputProps={{
              'aria-label': props.unique,
            }}
          />
        </FormControl>

  );
}
