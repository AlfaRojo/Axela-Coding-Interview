import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import EstudiantesContext from '../../context/EstudiantesContext';
import cursosContext from '../../context/CursosContext';

const EstudianteDetallePage = () => {
  const { id } = useParams()
  const { obtenerEstudiante } = useContext(EstudiantesContext);
  const estudiante = obtenerEstudiante(id);
  const { cursos } = useContext(cursosContext);

  if (!id || !estudiante) return <p>Estudiante no encontrado o id no proporcionado</p>

  return (
    <>
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Detalle del Estudiante</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <p><strong>Nombre:</strong> {estudiante.nombre} {estudiante.apellido}</p>
        <p><strong>Fecha de nacimiento:</strong> {estudiante.fechaNacimiento}</p>
        <p><strong>Año cursando:</strong> {estudiante.anioCursando}</p>
        <p><strong>Residencia:</strong> {estudiante.residencia?.direccion}, {estudiante.residencia?.municipio ?? '—'}, {estudiante.residencia?.departamento}</p>
        {/* <p><strong>Activo:</strong> {estudiante.activo ? 
            <span className="text-green-800">Sí</span> : 
            <span className="text-red-500">No</span>
        }</p> */}
        <p><strong>Cursos:</strong> { cursos.filter(curso => curso.alumnosIds?.includes(estudiante.id)).map(curso => curso.nombre).join(', ') || 'Ninguno' }</p>
      </div>
    </div>
    <div className="rounded-md border border-slate-200 bg-white p-4 mt-4">
    <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Tutor Legal</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        <p><strong>Nombre:</strong> {estudiante.encargado?.nombre} {estudiante.encargado?.apellido}</p>
        <p><strong>Parentesco:</strong> {estudiante.encargado?.parentesco}</p>
        <p><strong>Teléfono:</strong> {estudiante.encargado?.telefono}</p>
        <p><strong>Email:</strong> {estudiante.encargado?.email}</p>
      </div>
    </div>
    </>
  )
}

export default EstudianteDetallePage
