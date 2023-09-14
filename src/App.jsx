import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseAside from "./components/CourseAside/CourseAside";

const App = () => {
  return (
    <div>
       <Header/>
       <div  className="flex justify-between px-10 mt-8 md:flex-row gap-4 lg:flex-row flex-col container mx-auto">
        <Courses/>
        <CourseAside/>
       </div>
    </div>
  );
};

export default App;