import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Invest from './components/Invest';
import Crowdfund from './components/Crowdfund';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/crowdfund" element={<Crowdfund />} />
      </Routes>
    </div>
  );
}

export default App;
