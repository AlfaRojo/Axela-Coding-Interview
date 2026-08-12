import { Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';

import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import NoEncontradoPage from '../pages/NoEncontradoPage';

import EstudiantesListaPage from '../pages/estudiantes/EstudiantesListaPage';
import EstudianteFormPage from '../pages/estudiantes/EstudianteFormPage';
import EstudianteDetallePage from '../pages/estudiantes/EstudianteDetallePage';

import CatedraticosListaPage from '../pages/catedraticos/CatedraticosListaPage';
import CatedraticoFormPage from '../pages/catedraticos/CatedraticoFormPage';
import CatedraticoDetallePage from '../pages/catedraticos/CatedraticoDetallePage';

import CursosListaPage from '../pages/cursos/CursosListaPage';
import CursoFormPage from '../pages/cursos/CursoFormPage';
import CursoDetallePage from '../pages/cursos/CursoDetallePage';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATHS.HOME} element={<HomePage />} />

        {/* CRUD ESTUDIANTES */}
        <Route path={PATHS.ESTUDIANTES} element={<EstudiantesListaPage />} />
        <Route path={PATHS.ESTUDIANTE_NUEVO} element={<EstudianteFormPage />} />
        <Route path={PATHS.ESTUDIANTE_DETALLE()} element={<EstudianteDetallePage />} />
        <Route path={PATHS.ESTUDIANTE_EDITAR()} element={<EstudianteFormPage />} />

        {/* CRUD CATEDRATICOS */}
        <Route path={PATHS.CATEDRATICOS} element={<CatedraticosListaPage />} />
        <Route path={PATHS.CATEDRATICO_NUEVO} element={<CatedraticoFormPage />} />
        <Route path={PATHS.CATEDRATICO_DETALLE()} element={<CatedraticoDetallePage />} />
        <Route path={PATHS.CATEDRATICO_EDITAR()} element={<CatedraticoFormPage />} />

        {/* CRUD CURSOS */}
        <Route path={PATHS.CURSOS} element={<CursosListaPage />} />
        <Route path={PATHS.CURSO_NUEVO} element={<CursoFormPage />} />
        <Route path={PATHS.CURSO_DETALLE()} element={<CursoDetallePage />} />
        <Route path={PATHS.CURSO_EDITAR()} element={<CursoFormPage />} />

        <Route path={PATHS.NO_ENCONTRADO} element={<NoEncontradoPage />} />
      </Route>
    </Routes>
  );
}
