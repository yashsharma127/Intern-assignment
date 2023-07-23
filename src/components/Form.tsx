import { TextField, Button, Container, Typography, Box } from '@mui/material';
import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Form = () => {

  //form data storing state
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

    //routing using navigate
    const navigate = useNavigate()

  //handel changes in input fields
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //handel changes occurs when subit button is clicked
  const handleSubmit = async ( event: { preventDefault: () => void; } ) => {
    event.preventDefault()

    //custom validations for naame number and email
    if (!formData.name || !formData.phoneNumber || !formData.email) {
        alert('Please fill in all the fields.');
        return;
      }
  
      const phoneNumberAsNumber = Number(formData.phoneNumber);
      if (isNaN(phoneNumberAsNumber) || !/^[\d]{10}$/.test(formData.phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
      }
    

    try {
        // sending form data to server i.e in this case db.json using axios
      const response = await axios.post('http://localhost:3001/data', formData);
      console.log(response.data);
      alert('Form submitted successfully');  

      // Clearing the form after successful submission
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
      });
      
      //state is used in navigate so that if person try to access page2 
      //withouth submitting for hes rediredted to this page
      navigate('/components/Page2', { state: { formSubmitted: true } });
  } catch (error) {
    console.error('Error while submitting form:', error);
  }
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
            
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            
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