import { useNavigate } from 'react-router-dom';

function LandPage() {
    const navi = useNavigate();
    return(
        <div>
            <h1> FARM (ft. Dwayne) MEMBER MANAGEMENT</h1>
            <div>
                <button onClick={()=> navi('/login')}>LOGIN HERE</button>
                <button onClick={()=> navi('/login')}>REGISTER HERE</button>
            </div>
        </div>
    );
}

export default LandPage;