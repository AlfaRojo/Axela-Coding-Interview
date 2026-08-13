import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import CatedraticosContext from '../../context/CatedraticosContext';
import CursosContext from '../../context/CursosContext';

export default function CatedraticosListaPage() {
  const { catedraticos, eliminarCatedratico } = useContext(CatedraticosContext);

  const confirmarEliminar = (catedratico) => {
    const nombre = `${catedratico.nombre} ${catedratico.apellido}`;
    if (window.confirm(`¿Eliminar a ${nombre}?`)) {
      eliminarCatedratico(catedratico.id);
    }
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Catedráticos
          </h1>
          <p className="text-sm text-slate-500">
            {catedraticos.length} registrado(s)
          </p>
        </div>
        
        <Link
          to={PATHS.CATEDRATICO_NUEVO}
          className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Nuevo catedrático
        </Link>
      </div>
      {catedraticos.length === 0 ? (
        <p className="rounded-md border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-sm text-slate-500">
          No hay catedráticos registrados todavía.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Departamento</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100">
              {catedraticos.map((catedratico) => (
                <tr key={catedratico.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    <Link
                      to={PATHS.CATEDRATICO_DETALLE(catedratico.id)}
                      className="hover:underline"
                    >
                      {catedratico.nombre} {catedratico.apellido}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {catedratico.residencia?.departamento ?? '—'}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={PATHS.CATEDRATICO_DETALLE(catedratico.id)}
                        className="rounded-md border border-green-300 px-2 py-1 text-xs font-medium text-green-700 transition-colors hover:bg-green-100"
                      >
                        Info
                      </Link>
                      <Link
                        to={PATHS.CATEDRATICO_EDITAR(catedratico.id)}
                        className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => confirmarEliminar(catedratico)}
                        className="rounded-md border border-red-300 px-2 py-1 text-xs font-medium text-red-700 transition-colors hover:bg-red-100"
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
