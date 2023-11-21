import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const MODULES_URL = `${API_BASE}/modules`;
  // const COURSES_URL = `${API_BASE}/courses`;
  // const URL = "http://localhost:4000/api/courses";
  const URL = "https://kanbas-node-server-app-ub0o.onrender.com/api/courses";
  // const URL = COURSES_URL;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`)
    // console.log(courseId.$oid)
    // console.log(courseId )
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course)
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="d-flex">
      <Provider store={store}>
      <KanbasNavigation />
      <div className="d-flex">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />
          } />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
        </Routes>
      </div>
      </Provider>
    </div>
  );
}
export default Kanbas;