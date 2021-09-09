import Button from '../../../../common/Button';
import './hero.css';

const Hero = ({persons}) => {
    return <div id="hero">
        <h1>Welcome to MERN Stack.</h1>
        <Button />
        {
            persons.map(person=>{
                return <span key={person.id}> {person.name} </span>
            })
        }
    </div>
}

export default Hero;