import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Course = ({ course, handleNameChange,handleMarkAsRead,handleTotalPrice }) => {
  const { course_name, details, price, credit, img } = course;

  const handleButtonClick = () => {
    handleNameChange(course);
    handleMarkAsRead(credit);
    handleTotalPrice(price)
  };
 
  return (
    <div>
      <div className="card w-80 h-full shadow-md">
        <figure className="px-5 pt-5">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-between my-2">
            <span className="flex items-center">
              <FaDollarSign /> Price : {price}
            </span>
            <span className="flex items-center">
              <FaDollarSign /> Credit : {credit}hr
            </span>
          </div>
          <button
            onClick={handleButtonClick}
            className="w-full uppercase btn-primary btn"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
