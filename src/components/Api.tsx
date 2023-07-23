import axios from "axios";
import { useEffect, useState } from 'react';


const Api = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
          } catch (error) {
            console.error('Error while fetching data:', error);
          }
        };
    
        // Call the fetchData function when the component mounts
        fetchData();
      }, []);
    
      // Define columns for the data grid
  

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Api
