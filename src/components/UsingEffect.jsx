import { useState, useEffect } from 'react';
const UsingEffect = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    console.log('Hello from first UseEffect');
  }, [value]);

  useEffect(() => {
    console.log('Hello from second UseEffect');
  }, []);

  return (
    <div>
      <h1>
        Value1: <span style={{ color: 'red' }}>{value}</span>
      </h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
      <h1>
        Value2: <span style={{ color: 'red' }}>{value2}</span>
      </h1>
      <button className="btn" onClick={() => setValue2(value2 + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default UsingEffect;
