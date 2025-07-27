import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../providers/UserProvider.jsx';
import Sidebar from './Sidebar';
import '../styles/PageLayout.css';

const PageLayout = ({ children, title }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    const navi = useNavigate();
    const { isAuthenticated } = useUserContext();
    
    return (
        <>
            { isAuthenticated
                ? (
                    <div className={`page-layout ${sidebarHidden ? 'sidebar-hidden' : ''}`}>
                        <Sidebar onToggle={setSidebarHidden}/>
                        <main className='content'>
                            {title && <h1 className='page-title'>{title}</h1>}
                            {children}
                        </main>
                    </div>
                )
                : (
                    <>
                        <h1>Error 403. User is not authenticated.</h1>
                        <button onClick={() => navi('/login')}>Go back to login</button> 
                    </>
                )}
        </>
    );
}

export default PageLayout;