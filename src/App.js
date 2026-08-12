import { HashRouter } from 'react-router-dom';
import AppProviders from './context/AppProviders';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <HashRouter>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </HashRouter>
  );
}

export default App;
