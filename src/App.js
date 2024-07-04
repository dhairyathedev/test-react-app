import { IconBrandRust } from '@tabler/icons-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconBrandRust stroke={1.5} className="w-52 h-52 text-red-600 animate-bounce"/>
        <p>
          Vercel Clone is working!
        </p>
        <a
          className="App-link"
          href="https://dhairyashah.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
