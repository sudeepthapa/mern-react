import { Link } from "react-router-dom";
import './header.css';
export default function Header() {
    return (
        <div className="header">
            <div className="logo">Redux Flow</div>
            <div className="menu">
                <Link className="menu_item" to="/">Home</Link>
                <Link className="menu_item" to="/services">Services</Link>
                <Link className="menu_item" to="/services/add">Manage Services</Link>
            </div>
        </div>
    )
}
