import { TextField, Button, Container, Typography, Box } from '@mui/material';
import  { useState } from 'react'


const Form = () => {

  //form data storing state
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });


  //handel changes in input fields
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  //handel changes occurs when subit button is clicked
  const handleSubmit = async ( event: { preventDefault: () => void; } ) => {
    event.preventDefault()
  };

  
    return (
        <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">User Information</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
    )
}

export default Form