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

export const NAV_LINKS = [
  { to: PATHS.ESTUDIANTES, etiqueta: 'Estudiantes' },
  { to: PATHS.CATEDRATICOS, etiqueta: 'Catedráticos' },
  { to: PATHS.CURSOS, etiqueta: 'Cursos' },
];
