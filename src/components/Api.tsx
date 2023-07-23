import axios from "axios";
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

const Api = () => {

    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
          try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
          } catch (error) {
            console.error('Error while fetching data:', error);
          }
        };
    
        // Call the fetchData function when the component mounts
        fetchData();
      }, []);
    
       // Define columns for the data grid
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'userId', headerName: 'User ID', width: 120 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];
  

    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={data} columns={columns} checkboxSelection />
        </div>
    )
}

export default Api
