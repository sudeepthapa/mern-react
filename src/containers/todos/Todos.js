import React, {Fragment} from "react";
import { ModalBody, ModalHeader, Modal } from "reactstrap";
import NavBar from "../../components/Todos/Navbar";
import TodoForm from "../../components/Todos/TodoForm";
import TodoList from "../../components/Todos/TodoList";

const Todos = () => {

    const [openModal, setOpenModal] = React.useState(false)

    const [todos, setTodos] = React.useState([]);

    const toggle = () => setOpenModal(!openModal);

    const onAddButtonClicked = () => {
        setOpenModal(true);
    }

    const addTodos = (todo) => {
        setTodos([...todos, todo]);
    }

    return <Fragment>
        <NavBar onAddButtonClicked={onAddButtonClicked} />

        <div className="container">
            <TodoList todos={todos} />
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