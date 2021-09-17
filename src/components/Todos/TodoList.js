import { Alert, Card, CardBody, Button, Badge } from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoList = ({todos, deleteTodo}) => {

    if(todos.length === 0){
        return <Alert color="info">Sorry no todos found.</Alert>
    }

    return <div>
        {
            todos.map((todo, index)=>{
                return <Card key={index} className="mb-2">
                    <CardBody className="d-flex align-items-center justify-content-between">
                        <div>
                            <h4>{todo.title}</h4>
                            <span>{todo.description}</span>
                        </div>
                        <div>
                            <Button color="info"> <AiFillEdit /> </Button>
                            <Button color="danger" onClick={()=>deleteTodo(todo.id)}><AiFillDelete /> </Button>
                        </div>
                    </CardBody>
                </Card>
            })
        }
    </div>
}

export default TodoList;