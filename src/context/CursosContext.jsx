import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import cursosReducer, { CURSOS_ACTIONS } from './reducers/cursosReducer';
import cursos from '../data/cursos.json';

const CursosContext = createContext(null);

export function CursosProvider({ children }) {
  const [lista, dispatch] = useReducer(cursosReducer, cursos);

  const crearCurso = useCallback((datos) => {
    dispatch({ type: CURSOS_ACTIONS.CREAR, payload: datos });
  }, []);

  const actualizarCurso = useCallback((id, datos) => {
    dispatch({ type: CURSOS_ACTIONS.ACTUALIZAR, payload: { id, datos } });
  }, []);

  const eliminarCurso = useCallback((id) => {
    dispatch({ type: CURSOS_ACTIONS.ELIMINAR, payload: { id } });
  }, []);

  const obtenerCurso = useCallback(
    (id) => lista.find((curso) => curso.id === id) ?? null,
    [lista]
  );

  const value = useMemo(
    () => ({
      cursos: lista,
      crearCurso,
      actualizarCurso,
      eliminarCurso,
      obtenerCurso,
    }),
    [
      lista,
      crearCurso,
      actualizarCurso,
      eliminarCurso,
      obtenerCurso,
    ]
  );

  return (
    <CursosContext.Provider value={value}>
      {children}
    </CursosContext.Provider>
  );
}

export default CursosContext;