import PlayGame from '../components/Buttons/pages/PlayGames';
import StartGame from '../components/Buttons/pages/StartGame';
// import './App.css'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
}

export default App;
