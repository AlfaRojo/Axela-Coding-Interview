import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

// Placeholder compartido por las pantallas de catedráticos y cursos
// mientras no se implementa su CRUD.
export default function EnConstruccion({ titulo, descripcion }) {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
        {titulo}
      </h1>

      <div className="rounded-md border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
        <p className="text-sm font-medium text-slate-700">En construcción</p>

        <p className="mt-1 text-sm text-slate-500">
          {descripcion ?? 'Esta sección todavía no está disponible.'}
        </p>

        <Link
          to={PATHS.HOME}
          className="mt-6 inline-block rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
