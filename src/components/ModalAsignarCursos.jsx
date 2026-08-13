import { useContext } from 'react';
import CursosContext from '../context/CursosContext';
import CatedraticosContext from '../context/CatedraticosContext';
import { DIAS } from '../utils/constants';

const nombreDia = (codigo) =>
  DIAS.find((dia) => dia.codigo === codigo)?.nombre ?? codigo;

export default function ModalAsignarCursos({ catedraticoId, onCerrar }) {
  const { cursos, actualizarCurso } = useContext(CursosContext);
  const { obtenerCatedratico } = useContext(CatedraticosContext);

  const nombreCatedratico = (id) => {
    const cat = obtenerCatedratico(id);
    return cat ? `${cat.nombre} ${cat.apellido}` : '—';
  };

  const asignar = (cursoId) => {
    actualizarCurso(cursoId, { catedraticoId });
  };

  const quitar = (cursoId) => {
    actualizarCurso(cursoId, { catedraticoId: null });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onCerrar}
    >
      <div
        className="flex max-h-[80vh] w-full max-w-4xl flex-col rounded-md bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-900">Asignar cursos</h2>
          <button
            type="button"
            onClick={onCerrar}
            className="rounded-md px-2 py-1 text-sm text-slate-500 hover:bg-slate-100"
          >
            Cerrar
          </button>
        </div>

        <div className="overflow-auto px-6 py-4">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Curso</th>
                <th className="px-3 py-2">Días</th>
                <th className="px-3 py-2">Horario</th>
                <th className="px-3 py-2">Aula</th>
                <th className="px-3 py-2">Catedrático</th>
                <th className="px-3 py-2 text-right">Acción</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => {
                const esMio = curso.catedraticoId === catedraticoId;
                const libre = !curso.catedraticoId;

                return (
                  <tr key={curso.id} className="border-b border-slate-100">
                    <td className="px-3 py-2">
                      <span className="font-medium text-slate-900">{curso.nombre}</span>
                      <span className="ml-2 text-xs text-slate-500">{curso.codigo}</span>
                    </td>
                    <td className="px-3 py-2 text-slate-600">
                      {curso.dias.map(nombreDia).join(', ') || '—'}
                    </td>
                    <td className="px-3 py-2 text-slate-600">
                      {curso.horario.inicio} - {curso.horario.fin}
                    </td>
                    <td className="px-3 py-2 text-slate-600">{curso.aula}</td>
                    <td className="px-3 py-2 text-slate-600">
                      {libre ? (
                        <span className="text-amber-600">Sin asignar</span>
                      ) : (
                        nombreCatedratico(curso.catedraticoId)
                      )}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {esMio ? (
                        <button
                          type="button"
                          onClick={() => quitar(curso.id)}
                          className="rounded-md border border-slate-300 px-3 py-1 text-xs text-slate-700 hover:bg-slate-50"
                        >
                          Quitar
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => asignar(curso.id)}
                          disabled={!libre}
                          className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
                        >
                          Asignar
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
