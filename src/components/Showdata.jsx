import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));




export default function Showdata() {
    const [rows,setRows]=useState([]);
    useEffect(()=>{

      
     
    })
    axios.get("https://cryptic-everglades-50429.herokuapp.com/getData").then(res=>{

        setRows((res.data.reverse()));
    
        console.log(res["res"]);
      
    },[rows])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Company</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,id) => (row.name && row.company ?
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.company}</StyledTableCell>
            </StyledTableRow>:""
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}