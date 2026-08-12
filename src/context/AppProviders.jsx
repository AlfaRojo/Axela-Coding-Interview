import EstudiantesProvider from './EstudiantesContext';
import CursosContext from './CursosContext';
import CatedraticosContext from './CatedraticosContext';
import '../../src/App.css';

function AppProviders({ children }) {
    return (
        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <EstudiantesProvider>
                <CatedraticosContext>
                    <CursosContext>
                        {children}
                    </CursosContext>
                </CatedraticosContext>
            </EstudiantesProvider>
        </div>
    )
}

export default AppProviders;