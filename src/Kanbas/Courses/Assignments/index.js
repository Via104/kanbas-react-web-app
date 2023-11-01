import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'
import { LuGripVertical } from 'react-icons/lu'
import { BsThreeDotsVertical, BsCheckCircleFill, BsPencilSquare } from 'react-icons/bs'

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div className="container-fluid">
            <div className=" d-flex">
                <input type="search" className="form-control search" placeholder="Search for Assignment" />
                <div className="d-flex flex-fill justify-content-end">
                    <button className="btn btn-secondary me-2">Group</button>
                    <button className="btn btn-danger me-2">Assignment</button>
                    <button className="btn btn-secondary"><BsThreeDotsVertical /></button>
                </div>
            </div>
            <hr />
            <div className="hw list-group">
                <h2>Assignments for course {courseId}</h2>
                <li className="list-group-item">
                    Assignments
                </li>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item content"
                    >
                        <div className="d-flex align-items-center">
                            <LuGripVertical />
                            <BsPencilSquare className="text-success" />
                            <strong className="words">{assignment.title}</strong>
                            <BsCheckCircleFill className="text-success" />
                            <BsThreeDotsVertical />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;