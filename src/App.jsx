import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseAside from "./components/CourseAside/CourseAside";

const App = () => {
  const [courseName, setCourseName] = useState([]);
  const [remainTime, setRemainTime] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [prevPrice, setPrice] = useState(0);

  const handleButtonClick = (course) => {
    const isExit = courseName.find((courseItem) => courseItem.id === course.id);
    if (isExit) {
      return toast("Already Selected");
    } else {
      const newCourseName = [...courseName, course];
      setCourseName(newCourseName);

      const newReadingTime = readingTime + course.credit;

      if (newReadingTime > 20) {
        return toast.warn('🦄 20 ar beshi jabe na!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        setReadingTime(newReadingTime);

        let newRemainTime = 20 - newReadingTime;
        setRemainTime(newRemainTime);
      }

      const newPrice = prevPrice + course.price;
      setPrice(newPrice);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between px-6 mt-8 md:flex-col gap-4 lg:flex-row flex-col container mx-auto items-center lg:items-start">
        <Courses handleButtonClick={handleButtonClick} />
        <CourseAside
          courseName={courseName}
          readingTime={readingTime}
          prevPrice={prevPrice}
          remainTime={remainTime}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
