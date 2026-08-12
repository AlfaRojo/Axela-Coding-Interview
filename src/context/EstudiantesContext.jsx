import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import estudiantesReducer, { ESTUDIANTES_ACTIONS } from './reducers/estudiantesReducer';
import estudiantes from '../data/estudiantes.json';

const EstudiantesContext = createContext(null);

export function EstudiantesProvider({ children }) {
  const [lista, dispatch] = useReducer(estudiantesReducer, estudiantes);

  const crearEstudiante = useCallback((datos) => {
    dispatch({ type: ESTUDIANTES_ACTIONS.CREAR, payload: datos });
  }, []);

  const actualizarEstudiante = useCallback((id, datos) => {
    dispatch({ type: ESTUDIANTES_ACTIONS.ACTUALIZAR, payload: { id, datos } });
  }, []);

  const eliminarEstudiante = useCallback((id) => {
    dispatch({ type: ESTUDIANTES_ACTIONS.ELIMINAR, payload: { id } });
  }, []);

  const obtenerEstudiante = useCallback(
    (id) => lista.find((estudiante) => estudiante.id === id) ?? null,
    [lista]
  );

  const value = useMemo(
    () => ({
      estudiantes: lista,
      crearEstudiante,
      actualizarEstudiante,
      eliminarEstudiante,
      obtenerEstudiante,
    }),
    [
      lista,
      crearEstudiante,
      actualizarEstudiante,
      eliminarEstudiante,
      obtenerEstudiante,
    ]
  );

  return (
    <EstudiantesContext.Provider value={value}>
      {children}
    </EstudiantesContext.Provider>
  );
}

export default EstudiantesContext;