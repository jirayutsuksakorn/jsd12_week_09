import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/about");
    };

    return (
        <div className="bg-blue-300 font-bold text-center">
            <h1>Home Page</h1>
            <Link to="/about">Go To About</Link>
            <button onClick={handleNavigate}>Go to About</button>

        </div>
    );
}