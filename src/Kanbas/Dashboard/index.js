import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
    const courses = db.courses;
    return (
        <div className="container-fluid">
            {/* <h1>Dashboard</h1> */}
            <h1 class="display-6 ">Dashboard</h1>
            <hr/>
            
            <div class="dash-published-courses">
                <h4>Published Courses (24)</h4>
                <hr/>
            </div> 
            <div className="d-flex flex-wrap">
                {courses.map((course) => (
                    <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="col-12 col-md-5 col-lg-4"
                    >
                        {<div className="card" >
                            <div class="card-header bg-primary">
                            </div>
                            <div class="card-body">
                                <strong className="card-link">{course.number} {course.name}</strong>
                                <p class="card-text text-muted">
                                    <small>{course.startDate} to {course.endDate}</small>
                                </p>
                                <a href="#" role="button"><i class="fa fa-regular fa-newspaper"></i></a>
                            </div>
                        </div>}
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;