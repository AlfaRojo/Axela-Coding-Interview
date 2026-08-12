export function generateId(prefijo, registros) {
    // Genera un ID único basado en el prefijo y los registros existentes.
    // Ejemplo: Si el prefijo es "est" y los registros existentes son ["est-001", "est-002"], el siguiente ID generado será "est-003".
  const numeros = registros
    .map((r) => Number(String(r.id).split('-')[1]))
    .filter((n) => Number.isInteger(n));

  const siguiente = numeros.length > 0 ? Math.max(...numeros) + 1 : 1;

  return `${prefijo}-${String(siguiente).padStart(3, '0')}`;
}
