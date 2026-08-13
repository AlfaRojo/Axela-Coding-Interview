import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CatedraticosContext from '../../context/CatedraticosContext';
import CursosContext from '../../context/CursosContext';

const CatedraticoDetallePage = () => {
  const { id } = useParams()
  const { obtenerCatedratico } = useContext(CatedraticosContext);
  const catedratico = obtenerCatedratico(id);
  const { cursos } = useContext(CursosContext);
  const misCursos = cursos.filter((curso) => curso.catedraticoId === id);

  if (!id || !catedratico) return <p>Catedrático no encontrado o id no proporcionado</p>

  return (
    <>
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Detalle del Catedrático</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <p><strong>Nombre:</strong> {catedratico.nombre} {catedratico.apellido}</p>
        <p><strong>Fecha de nacimiento:</strong> {catedratico.fechaNacimiento}</p>
        <p><strong>Residencia:</strong> {catedratico.residencia?.direccion}, {catedratico.residencia?.municipio ?? '—'}, {catedratico.residencia?.departamento}</p>
        <p><strong>Salario:</strong> Q{catedratico.salario}</p>
        {/* <p><strong>Activo:</strong> {catedratico.activo ? 
            <span className="text-green-800">Sí</span> : 
            <span className="text-red-500">No</span>
        }</p> */}
      </div>
    </div>
    <div className="rounded-md border border-slate-200 bg-white p-4 mt-4">
    <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Cursos Asignados</h1>
      <div className="grid gap-3 sm:grid-cols-1">
        <strong>Curso(s):</strong>{misCursos.length > 0 ? (
          misCursos.map((curso) => (
            <p key={curso.id}>{curso.nombre}</p>
          ))
        ) : (
          <p>No hay cursos asignados a este catedrático.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default CatedraticoDetallePage