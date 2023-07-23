import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form'
import Page2 from './components/Page2';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/components/Page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;


