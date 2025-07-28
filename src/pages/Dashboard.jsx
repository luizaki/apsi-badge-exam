import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../providers/UserProvider.jsx';
import PageLayout from '../components/PageLayout.jsx';
import '../styles/Dashboard.css';

function Dashboard() {
    const { users, isAuthenticated } = useUserContext();
    const navi = useNavigate();

    return (
        <>
            { isAuthenticated 
            ? (
                <PageLayout title='Dashboard'>
                    <div className='container'>
                        <div className='numberRecordBox'>
                            <h3>Number of Records</h3>
                            <p>{users.length}</p>
                        </div>
                        <div className="latestRecordBox">
                            <h3>Latest Records</h3>
                            <p>{users.at(-1).name}</p>
                        </div>
                    </div>
                </PageLayout>
            ) : (
                <>
                    <h1 className='error-page'>Error 403. User is not authenticated.</h1>
                    <button className='go-back' onClick={() => navi('/login')}>Go back to login</button> 
                </>
            ) }
        </>



    );
}

export default Dashboard;