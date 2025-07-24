import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = ({ hidden = false, onToggle }) => {
    const [isHidden, setIsHidden] = useState(hidden);
    const loc = useLocation();

    const toggleSidebarView = () => {
        const newState = !isHidden;
        setIsHidden(newState);
        onToggle?.(newState);
    }

    const sidebarItems = [
        { label: '🔍 Read Records', path: '/read' },
        { label: '➕ Add Records', path: '/add' },
        { label: '✏️ Update Records', path: '/update' },
        { label: '🗑️ Delete Records', path: '/delete' }
    ]

    return (
        <div className={`sidebar ${isHidden ? 'hidden' : ''}`}>
            <button onClick={toggleSidebarView}>
                {isHidden ? '⇥' : '⇤'}
            </button>

            {!isHidden && (
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
            )}
        </div>
    );
}

export default Sidebar;