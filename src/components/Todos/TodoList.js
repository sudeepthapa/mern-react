import { Alert, Card, CardBody } from "reactstrap";

const TodoList = ({todos}) => {

    if(todos.length === 0){
        return <Alert color="info">Sorry no todos found.</Alert>
    }

    return <div>
        {
            todos.map((todo, index)=>{
                return <Card key={index} className="mb-2">
                    <CardBody>
                        <h4>{todo.title}</h4>
                        <span>{todo.description}</span>
                    </CardBody>
                </Card>
            })
        }
    </div>
}

export default TodoList;