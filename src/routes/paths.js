//URLs unificadas de la app. Se usan en los NavLink y en los Routes.
export const PATHS = {
  HOME: '/',

  ESTUDIANTES: '/estudiantes',
  ESTUDIANTE_NUEVO: '/estudiantes/nuevo',
  ESTUDIANTE_DETALLE: (id = ':id') => `/estudiantes/${id}`,
  ESTUDIANTE_EDITAR: (id = ':id') => `/estudiantes/${id}/editar`,

  CATEDRATICOS: '/catedraticos',
  CATEDRATICO_NUEVO: '/catedraticos/nuevo',
  CATEDRATICO_DETALLE: (id = ':id') => `/catedraticos/${id}`,
  CATEDRATICO_EDITAR: (id = ':id') => `/catedraticos/${id}/editar`,

  CURSOS: '/cursos',
  CURSO_NUEVO: '/cursos/nuevo',
  CURSO_DETALLE: (id = ':id') => `/cursos/${id}`,
  CURSO_EDITAR: (id = ':id') => `/cursos/${id}/editar`,

  NO_ENCONTRADO: '*',
};

// Enlaces del navbar. El navbar itera esto en vez de tener 3 NavLink escritos a mano.
export const NAV_LINKS = [
  { to: PATHS.ESTUDIANTES, etiqueta: 'Estudiantes' },
  { to: PATHS.CATEDRATICOS, etiqueta: 'Catedráticos' },
  { to: PATHS.CURSOS, etiqueta: 'Cursos' },
];
