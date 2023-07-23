import { TextField, Button, Container, Typography, Box } from '@mui/material';
import  { useState } from 'react'
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
    
      // Save data of the form to local storage
    localStorage.setItem('userData', JSON.stringify(formData));
      console.log(formData)
    alert('Form submitted successfully');

    // Clearing the form after successful submission
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
    });

    //using navigate route to go to page2
    navigate('/components/Page2', { state: { formSubmitted: true } });
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