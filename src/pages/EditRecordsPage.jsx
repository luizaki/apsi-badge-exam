import UserList from '../components/UserList';
import Sidebar from '../components/Sidebar.jsx';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function EditRecordsPage() {

    const {updateUser, users} = useUserContext();

    return (
        <>
            <Sidebar />
            <UserList 
                users={users}
                onUpdateUser={updateUser}
                disabled={false}
            />

        </>
    );
};
