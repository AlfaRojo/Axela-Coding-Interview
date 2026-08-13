import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import { DEPARTAMENTOS } from '../../utils/constants';
import CatedraticosContext from '../../context/CatedraticosContext';
import CursosContext from '../../context/CursosContext';
import ModalAsignarCursos from '../../components/ModalAsignarCursos';

const vacio = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  email: '',
  residencia: {
    direccion: '',
    municipio: '',
    departamento: '',
  },
};

export default function CatedraticoFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cursos } = useContext(CursosContext);
  const misCursos = cursos.filter((curso) => curso.catedraticoId === id);
  const [modalAbierto, setModalAbierto] = useState(false);

  const { crearCatedratico, actualizarCatedratico, obtenerCatedratico } = useContext(CatedraticosContext);

  const esEdicion = Boolean(id);
  const [form, setForm] = useState(vacio);

  useEffect(() => {
    if (!id) return;
    console.log('catedratico id:', id);
    const cat = obtenerCatedratico(id);
    if (cat) setForm(cat);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleResidencia = (e) => {
    setForm({
      ...form,
      residencia: { ...form.residencia, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (esEdicion) {
      actualizarCatedratico(id, form);
    } else {
      crearCatedratico(form);
    }

    navigate(PATHS.CATEDRATICOS);
  };

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
        {esEdicion ? 'Editar catedrático' : 'Nuevo catedrático'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">  
        <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-medium text-slate-900">Datos personales</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-600">
              Nombre
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Apellido
              <input
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Fecha de nacimiento
              <input
                type="date"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
            <label className="text-sm text-slate-600">
              Email
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>
          </div>
        </div>

                <div className="rounded-md border border-slate-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-medium text-slate-900">Residencia</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-600 sm:col-span-2">
              Dirección
              <input
                name="direccion"
                value={form.residencia.direccion}
                onChange={handleResidencia}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Municipio
              <input
                name="municipio"
                value={form.residencia.municipio}
                onChange={handleResidencia}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </label>

            <label className="text-sm text-slate-600">
              Departamento
              <select
                name="departamento"
                value={form.residencia.departamento}
                onChange={handleResidencia}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
              >
                <option value="">Selecciona</option>
                {DEPARTAMENTOS.map((depto) => (
                  <option key={depto}>{depto}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

      <div className="rounded-md border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-sm font-medium text-slate-900">Cursos asignados</h2>

        {misCursos.length > 0 ? (
          <div className="mb-3 grid gap-3 sm:grid-cols-2">
            {misCursos.map((curso) => (
              <div key={curso.id} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
                <span className="font-medium text-slate-900">{curso.nombre}</span>
                <span className="ml-2 text-xs text-slate-500">
                  {curso.dias.join(', ')} · {curso.horario.inicio}-{curso.horario.fin} · {curso.aula}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mb-3 text-sm text-slate-500">Sin cursos asignados.</p>
        )}

        <button
          type="button"
          onClick={() => setModalAbierto(true)}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:text-slate-400"
        >
          Asignar cursos
        </button>
      </div>

      <div className="rounded-md border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-sm font-medium text-slate-900">Salario</h2>
        
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-slate-600">
            Salario
            <input
              type="number"
              name="salario"
              min={1}
              step="1"
              value={form.salario}
              onChange={handleChange}
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

      {modalAbierto && (
        <ModalAsignarCursos
          catedraticoId={id}
          onCerrar={() => setModalAbierto(false)}
        />
      )}
    </section>
  );
}
