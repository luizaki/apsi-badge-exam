import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import { useUserContext } from '../providers/UserProvider';

import dashboardIcon from '../assets/dashboard_icon.png';
import readIcon from '../assets/read_icon.png';
import addIcon from '../assets/add_icon.png';
import editIcon from '../assets/edit_icon.png';
import deleteIcon from '../assets/delete_icon.png';

const Sidebar = ({ hidden = false, onToggle }) => {
    const { setIsAuthenticated } = useUserContext();
    const [isHidden, setIsHidden] = useState(hidden);
    const loc = useLocation();
    const navi = useNavigate();

    const toggleSidebarView = () => {
        const newState = !isHidden;
        setIsHidden(newState);
        onToggle?.(newState);
    }

    const handleLogout = () => {
        setIsAuthenticated(false);
        navi('/');
    }

    const sidebarItems = [
        { icon: dashboardIcon, label: 'Dashboard', path: '/dashboard' },
        { icon: readIcon, label: 'Read Records', path: '/read' },
        { icon: addIcon, label: 'Add Records', path: '/add' },
        { icon: editIcon, label: 'Update Records', path: '/update' },
        { icon: deleteIcon, label: 'Delete Records', path: '/delete' }
    ]

    return (
        <div className={`sidebar ${isHidden ? 'hidden' : ''}`}>
            <button className='toggle-button' onClick={toggleSidebarView}>
                {isHidden ? '⇥' : '⇤'}
            </button>

            {!isHidden && (
                <>
                    <nav>
                        <ul className='sidebar-items'>
                            {sidebarItems.map((item, idx) => (
                                <li key={idx}
                                    className={loc.pathname === item.path ? 'active' : ''}>
                                    <Link to={item.path}>
                                        <img src={item.icon} className='sidebar-icon' /> {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button className='logout-button' onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}

export default Sidebar;
