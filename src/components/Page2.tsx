import Api from "./Api";
import DepartmentList from "./DepartmentList";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Page2 = () => {
  
  //below code before return is used to prevent any non-form-submitted entry to this page
  const navigate = useNavigate();
  const location = useLocation();
  const isFormSubmitted = location.state?.formSubmitted || false;

  useEffect(() => {
    if (!isFormSubmitted) {
      alert('Please submit the form first to access this page.');
      navigate('/'); 
    }
  }, [isFormSubmitted, navigate]);

  if (!isFormSubmitted) {
    return null; 
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Data fetched from the API:</h1>
      <Api />

      &nbsp;

      <h1>Department List</h1>
      <DepartmentList />
    </div>
  );
};

export default Page2;
