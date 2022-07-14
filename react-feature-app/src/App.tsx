import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import Test from './components/test1/Tset';
import { Home } from './components/home/Home';
import { Router } from './routes/Routes';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
