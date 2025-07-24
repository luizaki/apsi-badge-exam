import { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/PageLayout.css';

const PageLayout = ({ children, title }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    
    return (
        <div className={`page-layout ${sidebarHidden ? 'sidebar-hidden' : ''}`}>
            <Sidebar onToggle={setSidebarHidden}/>
            <main className='content'>
                {title && <h1 className='page-title'>{title}</h1>}
                {children}
            </main>
        </div>
    );
}

export default PageLayout;