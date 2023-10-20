import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'
import {LuGripVertical} from 'react-icons/lu'
import {BsThreeDotsVertical, BsCheckCircleFill, BsPencilSquare} from 'react-icons/bs'

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div className="main flex-row">
            
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
                        <LuGripVertical/>
                        <BsPencilSquare className="text-success"/>
                        <strong className="words">{assignment.title}</strong>
                        <BsCheckCircleFill className="text-success"/>
                        <BsThreeDotsVertical />
                        </div>
                        
                        
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;