import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import EstudiantesContext from '../../context/EstudiantesContext';

export default function EstudiantesListaPage() {
  const { estudiantes, eliminarEstudiante } = useContext(EstudiantesContext);

  const confirmarEliminar = (estudiante) => {
    const nombre = `${estudiante.nombre} ${estudiante.apellido}`;
    if (window.confirm(`¿Eliminar a ${nombre}?`)) {
      eliminarEstudiante(estudiante.id);
    }
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Estudiantes
          </h1>
          <p className="text-sm text-slate-500">
            {estudiantes.length} registrado(s)
          </p>
        </div>

        <Link
          to={PATHS.ESTUDIANTE_NUEVO}
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Nuevo estudiante
        </Link>
      </div>

      {estudiantes.length === 0 ? (
        <p className="rounded-md border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
          No hay estudiantes registrados todavía.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Año</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {estudiantes.map((estudiante) => (
                <tr key={estudiante.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <Link
                      to={PATHS.ESTUDIANTE_DETALLE(estudiante.id)}
                      className="hover:underline"
                    >
                      {estudiante.nombre} {estudiante.apellido}
                    </Link>
                  </td>

                  <td className="px-4 py-3 text-slate-600">
                    {estudiante.anioCursando}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={PATHS.ESTUDIANTE_DETALLE(estudiante.id)}
                        className="rounded-md border border-green-300 px-2 py-1 text-xs font-medium text-green-700 transition-colors hover:bg-green-100"
                      >
                        Info
                      </Link>
                      <Link
                        to={PATHS.ESTUDIANTE_EDITAR(estudiante.id)}
                        className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                      >
                        Editar
                      </Link>

                      <button
                        type="button"
                        onClick={() => confirmarEliminar(estudiante)}
                        className="rounded-md border border-red-200 px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
