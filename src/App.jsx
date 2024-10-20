import { useRef, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import Screenshot from './Components/Screenshot';
import Weather from './Components/Weather';

function App() {
  const [category, setCategory] = useState("general");
  const newsBoardRef = useRef(null);
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div ref={newsBoardRef}>
        <NewsBoard category={category} />
        <Screenshot refToCapture={newsBoardRef} />
      </div>
      <Weather/>
      
    </div>
  );
}

export default App;
