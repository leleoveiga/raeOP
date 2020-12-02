import React from 'react';

import './App.css';
import DefaultPage from './components/Pages/DefaultPage';
import LandingPage from './components/Pages/LandingPage';
import Profile from './components/Pages/Perfil';
import RaeOpinion from './components/Pages/RaeOpinion';
import TeacherOpinion from './components/Pages/TeacherOpinion';
import InstitutionOpinion from './components/Pages/InstitutionOpinion'

function App() {
  return (
      <DefaultPage className='aplication'>
        <LandingPage />
        <Profile />
        <RaeOpinion />
        <TeacherOpinion />
        <InstitutionOpinion />
      </DefaultPage>

  );
}

export default App;
