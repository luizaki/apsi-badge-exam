import { useNavigate } from 'react-router-dom';

function LandPage() {
    const navi = useNavigate();

    return (
        <div className="centered-container">
        <div className="box">
            <h1>FARM (ft. Dwayne) MEMBER MANAGEMENT</h1>
            <button onClick={() => navi('/login')}>LOGIN HERE</button>
        </div>
        </div>
    );
}

export default LandPage;
