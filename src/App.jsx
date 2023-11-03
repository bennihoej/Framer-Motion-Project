import { Navigation } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App;
