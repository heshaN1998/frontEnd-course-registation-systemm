import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial';
import { AJAX } from './Ajax';
import { getCourseMaterialData } from './service/CourseMaterialService';
function App() {
  return (
    <>
    <NavBar/>
    <CourseMaterial/>
    <AJAX/>
    </>
  );
}

export default App;
