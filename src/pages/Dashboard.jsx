import { users } from '../userData.js';
import PageLayout from '../components/PageLayout.jsx';

function Dashboard() {

    return (
        <PageLayout title='Dashboard'>
            <div className='numberRecordBox'>
                <h3>Number of Records</h3>
                <p>{users.length}</p>
            </div>
            <div className="latestRecordBox">
                <h3>Latest Records</h3>
                <p>{users.at(-1).name}</p>
            </div>
        </PageLayout>
    );
}

export default Dashboard;