// Catálogos compartidos por toda la app.
// Regla: si un valor aparece en un <select>, vive aquí y no escrito a mano en el JSX.

export const DIAS = [
  { codigo: 'LUN', nombre: 'Lunes' },
  { codigo: 'MAR', nombre: 'Martes' },
  { codigo: 'MIE', nombre: 'Miércoles' },
  { codigo: 'JUE', nombre: 'Jueves' },
  { codigo: 'VIE', nombre: 'Viernes' },
];

export const ANIOS_ESCOLARES = [
  '1ro Básico',
  '2do Básico',
  '3ro Básico',
  '4to Bachillerato',
  '5to Bachillerato',
];

export const PARENTESCOS = [
  'Madre',
  'Padre',
  'Abuelo/a',
  'Tío/a',
  'Hermano/a',
  'Esposo/a',
  'Otro',
];

export const DEPARTAMENTOS = [
  'Guatemala',
  'Sacatepéquez',
  'Chimaltenango',
  'Escuintla',
  'Quetzaltenango',
];

export const PREFIJOS_ID = {
  ESTUDIANTE: 'est',
  CATEDRATICO: 'cat',
  CURSO: 'cur',
};
