import './app.css';
import { useEffect, useState } from 'react';

import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';

import { TestComponent } from '../components/test-component';

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('App mounted', count);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TestComponent />
    </>
  );
}

export default App;
