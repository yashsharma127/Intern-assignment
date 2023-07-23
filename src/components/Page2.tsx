import Api from "./Api";
import DepartmentList from "./DepartmentList";

const Page2 = () => {
  

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
