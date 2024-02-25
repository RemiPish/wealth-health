import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import ViewEmployee from './pages/ViewEmployee/ViewEmployee';
import Header from './components/Header/Header';
import Error from './pages/Error/Error';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/list' element={<ViewEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
