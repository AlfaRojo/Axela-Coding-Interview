import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import catedraticoReducer, { CATEDRATICOS_ACTIONS } from './reducers/catedraticoReducer';
import catedraticos from '../data/catedraticos.json';

const CatedraticosContext = createContext(null);

export function CatedraticosProvider({ children }) {
  const [lista, dispatch] = useReducer(catedraticoReducer, catedraticos);

  const crearCatedratico = useCallback((datos) => {
    dispatch({ type: CATEDRATICOS_ACTIONS.CREAR, payload: datos });
  }, []);

  const actualizarCatedratico = useCallback((id, datos) => {
    dispatch({ type: CATEDRATICOS_ACTIONS.ACTUALIZAR, payload: { id, datos } });
  }, []);

  const eliminarCatedratico = useCallback((id) => {
    dispatch({ type: CATEDRATICOS_ACTIONS.ELIMINAR, payload: { id } });
  }, []);

  const obtenerCatedratico = useCallback(
    (id) => lista.find((catedratico) => catedratico.id === id) ?? null,
    [lista]
  );

  const value = useMemo(
    () => ({
      catedraticos: lista,
      crearCatedratico,
      actualizarCatedratico,
      eliminarCatedratico,
      obtenerCatedratico,
    }),
    [
      lista,
      crearCatedratico,
      actualizarCatedratico,
      eliminarCatedratico,
      obtenerCatedratico,
    ]
  );

  return (
    <CatedraticosContext.Provider value={value}>
      {children}
    </CatedraticosContext.Provider>
  );
}

export default CatedraticosContext;