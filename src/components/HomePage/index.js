import Header from "../../common/Header"
import Hero from "./components/Hero"

const data = [
    {
        name: 'Alex',
        id: 1,
        age: 22
    },
    {
        name: 'Mary',
        id: 2,
        age: 321
    },
    {
        name: 'Joe',
        id: 3,
        age: 54
    },
    {
        name: 'John',
        id: 4,
        age: 12
    },
]

const HomePage = () => {
    return (
        <div>
            <Header title="Home Page" />
            <Hero persons={data} />
        </div>
    );
}

export default HomePage;