import { BrowserRouter } from 'react-router-dom';
import AppProviders from './context/AppProviders';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
