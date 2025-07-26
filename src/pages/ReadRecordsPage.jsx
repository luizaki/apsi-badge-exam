import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function ReadRecordsPage() {
    const { users, isAuthenticated } = useUserContext();
    const navi = useNavigate();

    return (
        <>
            { isAuthenticated 
                ? (
                    <PageLayout title={'Read Records'}>
                        <UserList
                            users={users}
                        />
                    </PageLayout>
                ) 
                : (
                    <>
                        <h1>Error 403. User is not authenticated.</h1>
                        <button onClick={() => navi('/login')}>Go back to login</button> 
                    </>
                ) }
            
        </>
    );
}