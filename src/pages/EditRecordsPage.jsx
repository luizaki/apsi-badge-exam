import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout.jsx';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {updateUser, users} = useUserContext();

    return (
        <>
            <PageLayout title={'Update Records'}>
                <UserList 
                    users={users}
                    onUpdateUser={updateUser}
                    disabled={false}
                />
            </PageLayout>
        </>
    );
};
