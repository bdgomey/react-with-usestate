import { useState } from 'react';
import { data } from './data';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((currentValue) => {
        return currentValue + 1
      });
    }, 3000);
  };
  return (
    <>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
      <h1>{count}</h1>
    </>
  );
}

export default App;
