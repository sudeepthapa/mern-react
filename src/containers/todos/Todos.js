import React, {Fragment} from "react";
import { ModalBody, ModalHeader, Modal, ListGroup, ListGroupItem } from "reactstrap";
import NavBar from "../../components/Todos/Navbar";
import TodoForm from "../../components/Todos/TodoForm";
import TodoList from "../../components/Todos/TodoList";
import { v4 as uuidv4 } from 'uuid';
import { CATEGORIES } from "../../constants/categories";

const Todos = () => {

    const [openModal, setOpenModal] = React.useState(false)

    const [todos, setTodos] = React.useState([]);
    const [filteredTodos, setFilteredTodos] = React.useState([]);

    const toggle = () => setOpenModal(!openModal);

    const onAddButtonClicked = () => {
        setOpenModal(true);
    }

    const addTodos = (todo) => {
        setTodos([...todos, {...todo, id: uuidv4()}]);
    }

    const deleteTodo = (id) => {
        const newTodoList = todos.filter(todo=>todo.id !== id);
        setTodos(newTodoList);
    }

    

    const onFilterClick = (filter) => {
        if(filter===''){
            setFilteredTodos(todos);
        }else{
            const newTodosList = todos.filter(todo=>todo.category == filter);
            setFilteredTodos(newTodosList)
        }
    }

    return <Fragment>
        <NavBar onAddButtonClicked={onAddButtonClicked} />

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                <ListGroup>
                    <ListGroupItem onClick={()=>onFilterClick('')}>All</ListGroupItem>
                    {
                        CATEGORIES.map(category=>{
                            return <ListGroupItem onClick={()=>onFilterClick(category.id)}> {category.title} </ListGroupItem>
                        })
                    }
                </ListGroup>
                </div>
                <div className="col-md-9">
                    <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>


        {/* Add Todo Modal */}
        <Modal isOpen={openModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Todo</ModalHeader>
            <ModalBody>
                <TodoForm cancel={toggle} addTodos={addTodos} />
            </ModalBody>
        </Modal>
    </Fragment>
}

export default Todos;