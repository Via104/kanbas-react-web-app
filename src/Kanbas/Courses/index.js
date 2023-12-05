import { useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { HiBars3 } from 'react-icons/hi2'
import './index.css'
import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
// const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;
function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  // const URL = "http://localhost:4000/api/courses";
  // const URL = "https://kanbas-node-server-app-ub0o.onrender.com/api/courses";
  const URL = COURSES_URL;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div className="container-fluid">
      
      <div className="d-flex align-items-center ">
        <div class="mt-3 me-3">
          <HiBars3 className="fs-1 text-danger" />
        </div>
        <div class="breadcrumb mt-3 mb-0" style={{ '--bs-breadcrumb-divider': '>', }}>
          <span class="breadcrumb-item ">{course.name}</span>
          <span class="breadcrumb-item active" aria-current="page">{pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length)}</span>
        </div >
      </div>

      <hr />




      <div className="d-flex">
        <CourseNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;