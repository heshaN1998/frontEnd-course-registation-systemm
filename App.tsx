import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CourseMaterial } from './components/CourseMaterial/CourseMaterial';
import { AJAX } from './Ajax';
import { getCourseMaterialData } from './service/CourseMaterialService';
import {BrowserRouter,Routes,Route} from "react-router";
import { Course } from './components/Course/Course';
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/coursematerial' element={<CourseMaterial/>}/>
          <Route path='/course' element={<Course/>}/>
        </Routes>
      </BrowserRouter>
    {/*<CourseMaterial/>*/}
    
    </>
  );
}
export default App;
