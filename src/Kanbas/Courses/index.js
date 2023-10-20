import db from "../../Kanbas/Database";
import { useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { HiBars3 } from 'react-icons/hi2'
import './index.css'

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="container-fluid">
      {/* <h1>Course {course.name}</h1>
      <div className="d-flex col-12">
        <div class="mt-3 me-3">
          <HiBars3 className="fs-1 text-danger" />
        </div>
        <div class="breadcrumb mt-3 mb-0" style={{'--bs-breadcrumb-divider': '>',}}>
          <span class="breadcrumb-item "><a href="#">{course.name}</a></span>
          <span class="breadcrumb-item active" aria-current="page">Assignments</span>
        </div >

        <hr/>
      </div>
      <hr/> */}
      <div className="d-flex align-items-center ">
      <div class="mt-3 me-3">
          <HiBars3 className="fs-1 text-danger" />
        </div>
        <div class="breadcrumb mt-3 mb-0" style={{'--bs-breadcrumb-divider': '>',}}>
          <span class="breadcrumb-item ">{course.name}</span>
          <span class="breadcrumb-item active" aria-current="page">{pathname.slice(pathname.lastIndexOf("/") + 1 , pathname.length)}</span>
        </div >
      </div>
      
      <hr/>
      
      
      

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