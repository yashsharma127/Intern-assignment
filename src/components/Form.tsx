import { TextField, Button, Container, Typography, Box } from '@mui/material';



const Form = () => {
  
    return (
        <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4">User Information</Typography>
        <form >
          <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
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