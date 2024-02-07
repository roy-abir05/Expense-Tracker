import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Incomes from './Pages/Incomes/Incomes';
import Expenses from './Pages/Expenses/Expenses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:profileName/Incomes" element={<Incomes />}/>
        <Route path="/:profileName/Expenses" element={<Expenses />}/>
      </Routes>
    </Router>
  );
}

export default App;
