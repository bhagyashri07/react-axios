import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Container } from '@mui/material';
import { textAlign } from '@mui/system';

const Heading = () => {
    const [state, setState] = useState({
        name:"",
        company:""
      })
      

      const handleChange = (event)=>{
        setState({...state,[event.target.name]:event.target.value});
      }
      const submit =()=>{
        axios.post("https://cryptic-everglades-50429.herokuapp.com/addData",state).then(data=>{
            console.log(data["data"]);
        }).catch(err=>{
            console.log(err);
        })
      console.log(state);
      setState({
        name:"",
        company:""
      })
    }
  return (

    <div>
      <Container style={{ backgroundColor:" darkblue", border:Box ,padding:20 } }>
      <h1>Digikull Students</h1>
      </Container>
      <h1>Hello User</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" name="name" value={state.name}  onChange={handleChange} variant="outlined" />
      {/* <br/> */}
       <TextField id="filled-basic" label="Company" name="company"value={state.company}  onChange={handleChange} variant="outlined" /> 
       
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */} 
    </Box>
    <Button variant="contained" size="small" onClick={submit}>
          Add
        </Button>
        
    </div>
    
  );
}

export default Heading