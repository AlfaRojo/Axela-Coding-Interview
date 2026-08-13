import react, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import CursosContext from '../../context/CursosContext';
import CatedraticosContext from '../../context/CatedraticosContext';

export default function CursosListaPage() {
  const { cursos, eliminarCurso } = useContext(CursosContext);
  const { catedraticos } = useContext(CatedraticosContext);

  const confirmarEliminar = (curso) => {
    const nombre = curso.nombre;
    if (window.confirm(`¿Está seguro de eliminar el curso "${nombre}"?`)) {
      eliminarCurso(curso.id);
    }
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Cursos
          </h1>
          <p className="text-sm text-slate-500">{cursos.length} registrado(s)</p>
        </div>
      <Link
          to={PATHS.CURSO_NUEVO}
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Nuevo curso
        </Link>
      </div>


      {cursos.length === 0 ? (
        <p className="rounded-md border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
          No hay cursos registrados todavía.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Catedrático</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {cursos.map((curso) => {
                const catedratico = catedraticos.find(
                  (c) => c.id === curso.catedraticoId
                );
                return (
                  <tr key={curso.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      <Link 
                        to={PATHS.CURSO_DETALLE(curso.id)}
                        className="hover:underline"
                      >
                        {curso.nombre}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      {catedratico
                        ? <Link
                            to={PATHS.CATEDRATICO_DETALLE(catedratico.id)}
                            className="hover:underline"
                          >
                            {catedratico.nombre} {catedratico.apellido}
                          </Link>
                        : 'N/A'}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          className="rounded-md border border-green-300 px-2 py-1 text-xs font-medium text-green-700 transition-colors hover:bg-green-100"
                          to={PATHS.CURSO_DETALLE(curso.id)}
                        >
                          Info
                        </Link>
                        <Link
                          className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                          to={PATHS.CURSO_EDITAR(curso.id)}
                        >
                          Editar
                        </Link>
                        <Link
                          className="rounded-md border border-red-300 px-2 py-1 text-xs font-medium text-red-700 transition-colors hover:bg-red-100"
                          onClick={() => confirmarEliminar(curso)}
                        >
                          Eliminar
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      </section>
  );
}
