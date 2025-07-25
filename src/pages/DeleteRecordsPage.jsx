import PageLayout from '../components/PageLayout.jsx';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {deleteUser, users} = useUserContext();

    return (
        <PageLayout title={'Delete Records'}>
            <UserList
                users={users}
                onDeleteUser={deleteUser}
                disabled={false}
            />
        </PageLayout>
    );
};
