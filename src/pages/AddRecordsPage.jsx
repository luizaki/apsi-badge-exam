import { useNavigate } from 'react-router-dom';
import UserForm from "../components/UserForm";
import PageLayout from "../components/PageLayout";
import { useUserContext } from '../providers/UserProvider.jsx';

export default function AddRecordsPage() {
    const { isAuthenticated } = useUserContext();
    const navi = useNavigate();

    return (
        <>
            { isAuthenticated 
                ? (
                <PageLayout title={'Add Records'}>
                    <UserForm />
                </PageLayout>) 
                : (
                    <>
                        <h1>Error 403. User is not authenticated.</h1>
                        <button onClick={() => navi('/login')}>Go back to login</button> 
                    </>
                ) }
            
        </>
    )
}