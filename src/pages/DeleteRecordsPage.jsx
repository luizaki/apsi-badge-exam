import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout.jsx';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {deleteUser, users, isAuthenticated} = useUserContext();
    const navi = useNavigate();

    return (
        <>
            { isAuthenticated 
                ? (
                    <PageLayout title={'Delete Records'}>
                        <UserList
                            users={users}
                            onDeleteUser={deleteUser}
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
