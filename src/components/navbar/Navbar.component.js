import { Link } from 'react-router-dom'
import "./Navbar.css";

export function Navbar() {
    return(
        <ul>
            <li>
                <Link to="/welcome">Welcome</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
            <li>
                <Link to="/">Meet</Link>
            </li>

        </ul>
    )
}

