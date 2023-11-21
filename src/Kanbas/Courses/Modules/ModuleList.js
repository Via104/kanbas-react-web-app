import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = () => {
    client.updateModule(module).then((module) => {
      dispatch(updateModule(module));
    });
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="modules list-group">
      <li className="list-group-item">
        <div className="d-flex flex-column">
          <div>
            <input
              className="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))}

            />
          </div>
          <div>
            <textarea
              className="form-control mb-2"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>

        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" onClick={handleUpdateModule}>Update</button>
          <button className="btn btn-success" onClick={handleAddModule}>Add</button>
        </div>

      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-warning me-2"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>
            </div>

            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <h4>{lesson.name}</h4>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;