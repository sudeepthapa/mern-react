import { useParams } from "react-router";
import Header from "../../common/Header";

const Services = () => {
    const params = useParams();
    const count = 44;
    console.log(params)
    return <div>
        <Header title="Services" count={count} />
    </div>
}

export { Services };