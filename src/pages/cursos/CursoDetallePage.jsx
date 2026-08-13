import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CursosContext from '../../context/CursosContext';
import CatedraticosContext from '../../context/CatedraticosContext';
import EstudiantesContext from '../../context/EstudiantesContext';

export default function CursoDetallePage() {
  const { id } = useParams()
  const { obtenerCurso } = useContext(CursosContext);
  const curso = obtenerCurso(id);
  const { catedraticos } = useContext(CatedraticosContext);
  const catedratico = catedraticos.find((c) => c.id === curso.catedraticoId);
  const { estudiantes } = useContext(EstudiantesContext);

  if (!id || !curso) return <p>Curso no encontrado o id no proporcionado</p>

  return (
    <section>
      <div className="rounded-md border border-slate-200 bg-white p-4">
        <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">Detalle del Curso ({curso.id})</h1>
        <div className="grid gap-3 sm:grid-cols-2">
          <p><strong>Nombre:</strong> {curso.nombre}</p>
          <p><strong>Catedrático:</strong> {catedratico ? `${catedratico.nombre} ${catedratico.apellido}` : 'N/A'}</p>
          <p><strong>Aula:</strong> {curso.aula}</p>
          <p><strong>Estudiantes:</strong> {curso.alumnosIds?.length || 0} / {curso.cupoMaximo}</p>
          <p><strong>Días:</strong> {curso.dias?.join(', ') || 'N/A'}</p>
          <p><strong>Horario:</strong> {curso.horario.inicio} - {curso.horario.fin}</p>
        </div>
      </div>
    </section>

  );
}
