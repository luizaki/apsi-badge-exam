import { users } from '../userData.js';

function Dashboard() {

    return (
        <div className='container'>
           <h1>Dashboard</h1>
            <div className='numberRecordBox'>
                <h3>Number of Records</h3>
                <p>{users.length}</p>
            </div>
            <div className="latestRecordBox">
                <h3>Latest Records</h3>
                <p>{users.at(-1).name}</p>
            </div>
        </div>
    );
}

export default Dashboard;