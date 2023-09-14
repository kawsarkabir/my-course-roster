import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseAside from "./components/CourseAside/CourseAside";

const App = () => {
  const [courseName, setCourseName] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
  const [prevPrice, setPrice] = useState(0)

  const handleNameChange = course =>{
    const newCourseName = [...courseName, course]
    setCourseName(newCourseName)
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }
  const handleTotalPrice = price =>{
    const newPrice = prevPrice + price
    setPrice(newPrice)
  }
   
  return (
    <div>
      <Header />
      <div className="flex justify-between px-6 mt-8 md:flex-col gap-4 lg:flex-row flex-col container mx-auto items-center lg:items-start">
        <Courses handleNameChange={handleNameChange} handleMarkAsRead={handleMarkAsRead} handleTotalPrice={handleTotalPrice} />
        <CourseAside courseName={courseName} readingTime={readingTime} prevPrice={prevPrice}  />
      </div>
    </div>
  );
};

export default App;
