import react, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import CursosContext from '../../context/CursosContext';
import CatedraticosContext from '../../context/CatedraticosContext';

const vacio = {
  nombre: '',
  codigo: '',
  catedraticoId: '',
  alumnosIds: [],
  dias: [],
  horario: {
    inicio: '',
    fin: '',
  },
  aula: '',
  cupoMaximo: 1,
}

export default function CursoFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { crearCurso, actualizarCurso, obtenerCurso } = useContext(CursosContext);
  const [curso, setCurso] = useState(vacio);
  const { catedraticos } = useContext(CatedraticosContext);
  const esEdicion = Boolean(id);

  useEffect(() => {
    if (!id) return;
    const c = obtenerCurso(id);
    if (c) setCurso(c);
  }, [id]);

  const handleChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const handleHorarioChange = (e) => {
    setCurso({
      ...curso,
      horario: { ...curso.horario, [e.target.name]: e.target.value },
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (esEdicion) {
      actualizarCurso(id, curso);
    } else {
      crearCurso(curso);
    }
    navigate(PATHS.CURSOS);
  };

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
        {esEdicion ? 'Editar Curso' : 'Nuevo Curso'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-medium text-slate-900">Datos del curso</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-600">
              Nombre
              <input
                name="nombre"
                value={curso.nombre}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Código
              <input
                name="codigo"
                value={curso.codigo}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600 sm:col-span-2">
              Catedrático
              <select
                name="catedraticoId"
                value={curso.catedraticoId}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              >
                <option value="">Selecciona</option>
                {catedraticos.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nombre} {c.apellido}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm text-slate-600">
              Aula
              <input
                name="aula"
                value={curso.aula}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Cupo máximo
              <input
                type="number"
                name="cupoMaximo"
                min={1}
                step="1"
                value={curso.cupoMaximo}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-medium text-slate-900">Horario</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-600 sm:col-span-2">
              Días (separados por comas)
              <input
                name="dias"
                value={curso.dias.join(', ')}
                onChange={(e) => setCurso({ ...curso, dias: e.target.value.split(',').map(d => d.trim()) })}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Hora de inicio
              <input
                type="time"
                name="inicio"
                value={curso.horario.inicio}
                onChange={handleHorarioChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Hora de fin
              <input
                type="time"
                name="fin"
                value={curso.horario.fin}
                onChange={handleHorarioChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {esEdicion ? 'Actualizar' : 'Crear'}
          </button>
        </div>
      </form>
    </section>
  );
}
