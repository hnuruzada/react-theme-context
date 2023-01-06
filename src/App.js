
import './App.css';
import ThemeChangeProvider from './context/ThemeContext';
import { Home } from './Home';

function App() {
  return (
    <ThemeChangeProvider >
      <Home/>
    </ThemeChangeProvider>
  );
}

export default App;
