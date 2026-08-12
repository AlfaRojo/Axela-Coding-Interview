import { generateId } from '../../utils/generateId';
import { PREFIJOS_ID } from '../../utils/constants';

export const ESTUDIANTES_ACTIONS = {
  CREAR: 'estudiantes/crear',
  ACTUALIZAR: 'estudiantes/actualizar',
  ELIMINAR: 'estudiantes/eliminar',
};

export default function estudiantesReducer(state, action) {
  switch (action.type) {
    //Create
    case ESTUDIANTES_ACTIONS.CREAR: {
      const nuevo = {
        ...action.payload,
        id: generateId(PREFIJOS_ID.ESTUDIANTE, state),
        activo: true,
        residencia: action.payload.residencia ?? {},
        encargado: action.payload.encargado ?? {},
      };

      return [...state, nuevo];
    }

    //Update
    case ESTUDIANTES_ACTIONS.ACTUALIZAR: {
      const { id, datos } = action.payload;

      return state.map((estudiante) =>
        estudiante.id === id ? { ...estudiante, ...datos, id } : estudiante
      );
    }

    //Delete
    case ESTUDIANTES_ACTIONS.ELIMINAR: {
      const { id } = action.payload;

      return state.filter((estudiante) => estudiante.id !== id);
    }

    default:
      return state;
  }
}
