import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { CATEGORIES } from '../../constants/categories';

const TodoForm = ({cancel, addTodos}) => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        const todo = {
            title,
            description,
            category
        };
        addTodos(todo)
        cancel();
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <FormGroup className="mb-2">
                <Label for="title">Title</Label>
                <Input
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text"
                    name="title"
                    id="title"
                />
            </FormGroup>
            <FormGroup className="mb-2">
                <Label for="category">Category</Label>
                <Input
                    value={category}
                    type="select"
                    name="category"
                    id="category"
                    onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value="" disabled>--select--</option>
                    {
                        CATEGORIES.map(category => <option key={category.id} value={category.id}>{category.title}</option>)
                    }
                    
                </Input>
            </FormGroup>
            <FormGroup className="mb-2">
                <Label for="description">Description</Label>
                <Input
                    value={description}
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={(e)=>setDescription(e.target.value)}

                />
            </FormGroup>
            <div className="d-flex justify-content-end">
                <Button type="button" color="danger" onClick={cancel}>Cancel</Button>
                <div style={{width: 10}}></div>
                <Button color="primary">Submit</Button>
            </div>
        </Form>
    )
}

export default TodoForm;