import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");   // 여러번 반복됨
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App; 
