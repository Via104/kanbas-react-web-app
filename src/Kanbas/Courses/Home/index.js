import ModuleList from "../Modules/ModuleList";
import { BsThreeDotsVertical } from 'react-icons/bs'
import './index.css'

function Home() {
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
                <button className="btn btn-secondary float-end"><BsThreeDotsVertical /></button>


            </div>
            <hr />
            <div className="row">
                <div className="col col-9">
                    <h2>Home</h2>
                    <ModuleList />
                </div>



                <div className="col col-3 float-end">
                    <h2 className="flex-row">Status</h2>
                    <button className="btn btn-secondary col-12">Collapse All</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">Import Existing Content</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">Import From Commons</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">Choose Home Page</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">View Course Stream</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">New Announcement</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">New Analytics</button>
                    <button className="btn btn-secondary me-1 mt-2 col-12">View Course Notifications</button>
                    <b>To Do</b>
                    <hr/>
                    <button className="btn btn-danger me-1 col-12"><i class="fa-solid fa-plus"></i>Module</button>
                    <button className="btn btn-secondary col-12"><BsThreeDotsVertical /></button>
                </div>
            </div>

        </div>
    );
}
export default Home;