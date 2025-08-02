/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';
import TeamPage from 'pages/TeamPage';
import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';
import TherapyAssistant from './parts/TherapyAssistant';
import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <TherapyAssistant /> {/* 👈 This will appear on all routes */}
    </>
  );
}

export default App;
