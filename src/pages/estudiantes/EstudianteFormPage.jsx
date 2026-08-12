import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import { ANIOS_ESCOLARES, DEPARTAMENTOS, PARENTESCOS } from '../../utils/constants';
import EstudiantesContext from '../../context/EstudiantesContext';

const vacio = {
  nombre: '',
  apellido: '',
  fechaNacimiento: '',
  anioCursando: '',
  residencia: { direccion: '', municipio: '', departamento: '' },
  encargado: { nombre: '', parentesco: '', telefono: '', email: '' },
};

const input = 'w-full rounded-md border border-slate-300 px-3 py-2 text-sm';

export default function EstudianteFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { crearEstudiante, actualizarEstudiante, obtenerEstudiante } =
    useContext(EstudiantesContext);

  const esEdicion = Boolean(id);
  const [form, setForm] = useState(vacio);

  useEffect(() => {
    if (!id) return;
    const est = obtenerEstudiante(id);
    if (est) setForm(est);
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

  const handleEncargado = (e) => {
    setForm({
      ...form,
      encargado: { ...form.encargado, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (esEdicion) {
      actualizarEstudiante(id, form);
    } else {
      crearEstudiante(form);
    }

    navigate(PATHS.ESTUDIANTES);
  };

  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
        {esEdicion ? 'Editar estudiante' : 'Nuevo estudiante'}
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
                className={input}
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Apellido
              <input
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                className={input}
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
                className={input}
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Año que cursa
              <select
                name="anioCursando"
                value={form.anioCursando}
                onChange={handleChange}
                className={input}
                required
              >
                <option value="">Selecciona</option>
                {ANIOS_ESCOLARES.map((anio) => (
                  <option key={anio}>{anio}</option>
                ))}
              </select>
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
                className={input}
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Municipio
              <input
                name="municipio"
                value={form.residencia.municipio}
                onChange={handleResidencia}
                className={input}
              />
            </label>

            <label className="text-sm text-slate-600">
              Departamento
              <select
                name="departamento"
                value={form.residencia.departamento}
                onChange={handleResidencia}
                className={input}
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
          <h2 className="mb-3 text-sm font-medium text-slate-900">Encargado</h2>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="text-sm text-slate-600">
              Nombre
              <input
                name="nombre"
                value={form.encargado.nombre}
                onChange={handleEncargado}
                className={input}
                required
              />
            </label>

            <label className="text-sm text-slate-600">
              Parentesco
              <select
                name="parentesco"
                value={form.encargado.parentesco}
                onChange={handleEncargado}
                className={input}
              >
                <option value="">Selecciona</option>
                {PARENTESCOS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>

            <label className="text-sm text-slate-600">
              Teléfono
              <input
                name="telefono"
                value={form.encargado.telefono}
                onChange={handleEncargado}
                className={input}
              />
            </label>

            <label className="text-sm text-slate-600">
              Correo
              <input
                type="email"
                name="email"
                value={form.encargado.email}
                onChange={handleEncargado}
                className={input}
              />
            </label>
          </div>
        </div>

        <button type="submit" className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700">
          {esEdicion ? 'Guardar' : 'Crear'}
        </button>
      </form>
    </section>
  );
}
