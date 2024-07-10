import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Records = () => {
    function createData(Name,Branch,Semester,Age,CGPA) {
        return { Name, Branch, Semester, Age, CGPA };
      }
      
      const rows = [
        createData('Faris S', 'CS(AI)', 5, 20,8.4 ),
        createData('Adharsh', 'CSE', 5, 20, 8.2),
        createData('Rohit', 'CSE', 5, 20, 8.3),
        createData('Gagan', 'CSE', 5, 21, 8.0),
      ];
    
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Branch</b></TableCell>
            <TableCell align="right"><b>Semester</b></TableCell>
            <TableCell align="right"><b>Age</b></TableCell>
            <TableCell align="right"><b>CGPA</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Branch}</TableCell>
              <TableCell align="right">{row.Semester}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.CGPA}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  )
}

export default Records