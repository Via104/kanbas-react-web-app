import ModuleList from "../Modules/ModuleList";
import { BsThreeDotsVertical } from 'react-icons/bs'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="primary flex-row">
            <div className="primary">
                <div className="d-flex">
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
                    <button className="btn btn-secondary float-end"><BsThreeDotsVertical /></button>


                </div>
                <hr />
                <div className="primary float-start">
                    <h2>Home</h2>
                    <ModuleList />
                </div>
            </div>



            <div className="d-flex flex-col">
                <h2 className="flex-row">Status</h2>
                <div className="flex-row"><button className="btn btn-secondary me-1 float-end">Collapse All</button></div>
                <button className="btn btn-secondary me-1 float-end">View Progress</button>
                <button className="btn btn-danger me-1 float-end"><i class="fa-solid fa-plus"></i>Module</button>
                <button className="btn btn-secondary float-end"><BsThreeDotsVertical /></button>
            </div>
        </div>
    );
}
export default Home;