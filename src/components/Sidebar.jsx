import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import { useUserContext } from '../providers/UserProvider';

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
        { label: '📊 Dashboard', path: '/dashboard' },
        { label: '🔍 Read Records', path: '/read' },
        { label: '➕ Add Records', path: '/add' },
        { label: '✏️ Update Records', path: '/update' },
        { label: '🗑️ Delete Records', path: '/delete' }
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
                                        {item.label}
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
