import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = ({title, count}) => {
    return <div id="header">
        <h1> {title} </h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
    </div>
}

export default Header;

const person = {
    name: 'g',
    age: 44,
    password: 433,
    fasfd: 435345
}

const { password, ...remaining } = person;

const abc = { ...person, name: 'test' };