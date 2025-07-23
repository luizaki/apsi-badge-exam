import { useState } from 'react';
import { Link } from 'react-router-dom';
// Import CSS here

const Sidebar = ({ hidden = false }) => {
    const [isHidden, setIsHidden] = useState(hidden);

    const toggleSidebarView = () => setIsHidden(!isHidden);

    const sidebarItems = [
        { label: '🔍 Read Records', path: '/read' },
        { label: '➕ Add Records', path: '/add' },
        { label: '✏️ Update Records', path: '/update' },
        { label: '🗑️ Delete Records', path: '/delete' }
    ]

    return (
        <div className='sidebar'>
            <button onClick={toggleSidebarView}>
                {isHidden ? '⇥' : '⇤'}
            </button>

            {!isHidden && (
                <nav>
                    <ul className='sidebar-items'>
                        {sidebarItems.map((item, idx) => (
                            <li key={idx}>
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