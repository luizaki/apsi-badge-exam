import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout.jsx';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {updateUser, users, isAuthenticated} = useUserContext();
    const navi = useNavigate();

    return (
        <>
            { isAuthenticated 
                ? (
                    <PageLayout title={'Update Records'}>
                        <UserList 
                            users={users}
                            onUpdateUser={updateUser}
                            disabled={false}
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
};
