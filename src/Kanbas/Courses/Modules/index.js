import ModuleList from "./ModuleList";
import './index.css';
import {BsThreeDotsVertical} from 'react-icons/bs';
function Modules() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-1 float-end">Collapse All</button>
        <button className="btn btn-secondary me-1 float-end">View Progress</button>
        <div className="dropdown float-end">
          <button className="btn btn-secondary  me-1 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Publish All
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">Action</button>
            <button className="dropdown-item" type="button">Another action</button>
            <button className="dropdown-item" type="button">Something else here</button>
          </div>
        </div>
        <button className="btn btn-danger me-1 float-end"><i class="fa-solid fa-plus"></i>Module</button>
        <button className="btn btn-secondary float-end"><BsThreeDotsVertical/></button>
      </div>
      <hr />
      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;