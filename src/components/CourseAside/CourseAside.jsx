import React from "react";

const CourseAside = () => {
  return (
    <div className="md:w-full lg:w-1/4">
      <div className="card w-80 bg-base-100 shadow-md">
        
        <div className="card-body">
          <h2 className=" text-lg font-semibold border-b text-blue-500">Credit Hour Remaining : 0hr</h2>
          <h1 className="text-lg font-semibold border-b my-5">Course Name</h1>
          <p className="text-lg border-b">Total Cradit Hours : 0</p>
          <h2 className="text-lg font-medium">Total Price: 000 USD</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseAside;
