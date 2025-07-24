import Sidebar from './Sidebar';

const PageLayout = ({ children, title }) => {
    return (
        <div className='page-layout'>
            <Sidebar />
            <main className='content'>
                {title && <h1 className='page-title'>{title}</h1>}
                {children}
            </main>
        </div>
    );
}

export default PageLayout;