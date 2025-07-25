import { users } from '../userData.js';
import UserList from '../components/UserList';
import Sidebar from '../components/Sidebar.jsx';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {deleteUser, users} = useUserContext();

    return (
        <>
            <Sidebar />
            <UserList
                users={users}
                onDeleteUser={deleteUser}
                disabled={false}
            />

        </>
    );
};
