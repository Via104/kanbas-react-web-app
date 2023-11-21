import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
    console.log(`variable: ${process.env.REACT_APP_API_BASE}`)
    return (
        
        <div>
            <h1>Dashboard</h1>
            <button className="btn btn-primary me-3" onClick={updateCourse}>Update</button>

            <button className="btn btn-success" onClick={addNewCourse}>Add</button>
            <h5>Course</h5>
            <input
                value={course.name}
                className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <input
                value={course.number}
                className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
            <input
                value={course.startDate}
                className="form-control"
                type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
            />
            <input
                value={course.endDate}
                className="form-control"
                type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
            />

            <div className="list-group">
                {courses.map((course) => (
                    <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item"
                    >
                        <span className="me-3">{course.name}</span>
                        <span className="float-end">
                            <button
                                className="btn btn-danger me-3"
                                onClick={(event) => {
                                    event.preventDefault();
                                    deleteCourse(course._id);
                                }}
                            >
                                Delete
                            </button>

                            <button
                                className="btn btn-warning"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setCourse(course);
                                }}

                            >
                                Edit
                            </button>
                        </span>

                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;