import { Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/test1/Tset';
import { Home } from './components/home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
