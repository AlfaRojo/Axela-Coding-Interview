import {EstudiantesProvider} from './EstudiantesContext';
import {CursosProvider} from './CursosContext';
import {CatedraticosProvider} from './CatedraticosContext';
import '../App.css';

function AppProviders({ children }) {
    return (
    <EstudiantesProvider>
        <CatedraticosProvider>
            <CursosProvider>
                {children}
            </CursosProvider>
        </CatedraticosProvider>
    </EstudiantesProvider>
    )
}

export default AppProviders;