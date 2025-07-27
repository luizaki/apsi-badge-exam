import PageLayout from '../components/PageLayout';
import UserList from '../components/UserList';
import { useUserContext } from '../providers/UserProvider.jsx';

export default function ReadRecordsPage() {
    
    const { users } = useUserContext();

    return (
        <>
            <PageLayout title={'Read Records'}>
                <UserList
                    users={users}
                />
            </PageLayout>
        </>
    );
}