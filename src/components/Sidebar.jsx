import { useState } from 'react';
import { Link } from 'react-router-dom';
// Import CSS here

const Sidebar = ({ hidden = false }) => {
    const [isHidden, setIsHidden] = useState(hidden);

    const toggleSidebarView = () => setIsHidden(!isHidden);

    return (
        <div className='sidebar'>
            <button onClick={toggleSidebarView}>
                {isHidden ? '⇥' : '⇤'}
            </button>

            {!isHidden && (
                <nav>
                    {/* This might likely converted into mapping the navlist instead */}
                    <ul className='sidebar-items'>
                        <li><Link>🔍 Read Records</Link></li>
                        <li><Link>➕ Add Records</Link></li>
                        <li><Link>✏️ Update Records</Link></li>
                        <li><Link>🗑️ Delete Records</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Sidebar;