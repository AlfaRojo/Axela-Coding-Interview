import { generateId } from '../../utils/generateId';
import { PREFIJOS_ID } from '../../utils/constants';

export const CURSOS_ACTIONS = {
  CREAR: 'cursos/crear',
  ACTUALIZAR: 'cursos/actualizar',
  ELIMINAR: 'cursos/eliminar',
};

export default function cursosReducer(state, action) {
  switch (action.type) {
    //Create
    case CURSOS_ACTIONS.CREAR: {
      const nuevo = {
        ...action.payload,
        id: generateId(PREFIJOS_ID.CURSO, state),
        activo: true,
        alumnosIds: action.payload.alumnosIds ?? [],
        dias: action.payload.dias ?? [],
      };

      return [...state, nuevo];
    }

    //Update
    case CURSOS_ACTIONS.ACTUALIZAR: {
      const { id, datos } = action.payload;

      return state.map((curso) =>
        curso.id === id ? { ...curso, ...datos, id } : curso
      );
    }

    //Delete
    case CURSOS_ACTIONS.ELIMINAR: {
      const { id } = action.payload;

      return state.filter((curso) => curso.id !== id);
    }

    default:
      return state;
  }
}
