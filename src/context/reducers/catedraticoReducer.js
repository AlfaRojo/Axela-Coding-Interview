import { generateId } from '../../utils/generateId';
import { PREFIJOS_ID } from '../../utils/constants';

export const CATEDRATICOS_ACTIONS = {
  CREAR: 'catedraticos/crear',
  ACTUALIZAR: 'catedraticos/actualizar',
  ELIMINAR: 'catedraticos/eliminar',
};

export default function catedraticoReducer(state, action) {
  switch (action.type) {
    //Create
    case CATEDRATICOS_ACTIONS.CREAR: {
      const nuevo = {
        ...action.payload,
        id: generateId(PREFIJOS_ID.CATEDRATICO, state),
        activo: true,
        residencia: action.payload.residencia ?? {},
      };

      return [...state, nuevo];
    }

    //Update
    case CATEDRATICOS_ACTIONS.ACTUALIZAR: {
      const { id, datos } = action.payload;

      return state.map((catedratico) =>
        catedratico.id === id ? { ...catedratico, ...datos, id } : catedratico
      );
    }

    //Delete
    case CATEDRATICOS_ACTIONS.ELIMINAR: {
      const { id } = action.payload;

      return state.filter((catedratico) => catedratico.id !== id);
    }

    default:
      return state;
  }
}
