import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Units from './pages/Units'
import UnitPage from './pages/UnitPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/units" element={<Units/>} />
          <Route path='/unit/:id' element={<UnitPage/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
