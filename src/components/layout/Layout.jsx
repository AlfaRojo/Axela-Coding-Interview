import { Link, NavLink, Outlet } from 'react-router-dom';
import { NAV_LINKS, PATHS } from '../../routes/paths';

function claseNavLink({ isActive }) {
  const base = 'rounded-md px-3 py-2 text-sm font-medium transition-colors';
  return isActive
    ? `${base} bg-slate-900 text-white`
    : `${base} text-slate-600 hover:bg-slate-100 hover:text-slate-900`;
}

//navbar + contenedor + footer.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link
            to={PATHS.HOME}
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            CRUD Escolar
          </Link>

          <nav className="flex items-center gap-1">
            {NAV_LINKS.map(({ to, etiqueta }) => (
              <NavLink key={to} to={to} className={claseNavLink}>
                {etiqueta}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3 text-center text-xs text-slate-500">
          Axela Interview
        </div>
      </footer>
    </div>
  );
}
