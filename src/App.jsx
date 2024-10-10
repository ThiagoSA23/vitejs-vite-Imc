import { useState } from 'react';
import './App.css';
import Imc from './components/Imc';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Imc />
    </div>
  );
}

export default App;
