import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6"
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsCalendar2Week, BsInbox, BsClock } from "react-icons/bs";
import { PiMonitorPlay } from 'react-icons/pi'
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linksToIconsMap = {
        Account: <MdOutlineAccountCircle className="fs-1 text" />,
        Dashboard: <RiDashboard3Line className="fs-1 text" />,
        Courses: <FaBook className="fs-1 text" />,
        Calendar: <BsCalendar2Week className="fs-1 text" />,
        Inbox: <BsInbox className="fs-1 text" />,
        History: <BsClock className="fs-1 text" />,
        Studio: <PiMonitorPlay className="fs-1 text" />,
        Commons: <FaRightFromBracket className="fs-1 text" />,
        Help: <AiOutlineQuestionCircle className="fs-1 text" />
    };

    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigation list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item text-center p-4 ${pathname.includes(link) && "active"
                        }`}
                >
                    {linksToIconsMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;