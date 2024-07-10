import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
    const [formData, setFormData] = useState({
        name: '',
        branch: '',
        semester: '',
        age: '',
        cgpa: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="branch"
        name="branch"
        label="Branch"
        variant="outlined"
        value={formData.branch}
        onChange={handleChange}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="semester"
        name="semester"
        label="Semester"
        variant="outlined"
        value={formData.semester}
        onChange={handleChange}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="age"
        name="age"
        label="Age"
        type="number"
        variant="outlined"
        value={formData.age}
        onChange={handleChange}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="cgpa"
        name="cgpa"
        label="CGPA"
        variant="outlined"
        value={formData.cgpa}
        onChange={handleChange}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  )
}

export default Add