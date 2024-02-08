import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Incomes from './Pages/Incomes/Incomes';
import Expenses from './Pages/Expenses/Expenses';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="" element={<Dashboard />}/>
        <Route path="/Incomes" element={<Incomes />}/>
        <Route path="/Expenses" element={<Expenses />}/>
      </Routes>
    </Router>
  );
}

export default App;
