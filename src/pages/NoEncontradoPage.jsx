import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

export default function NoEncontradoPage() {
  return (
    <section className="rounded-md border border-slate-200 bg-white px-4 py-16 text-center">
      <p className="text-5xl font-semibold tracking-tight text-slate-300">404</p>

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
        Página no encontrada
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        La ruta que buscas no existe o fue movida.
      </p>

      <Link
        to={PATHS.HOME}
        className="mt-6 inline-block rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
