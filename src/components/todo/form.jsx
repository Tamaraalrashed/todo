import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from "../../components/hooks/useform.jsx";

function TodoForm(props){

  const [handleInputChange, handleSubmit] = useForm(cb);

  function cb(item){
    props.handleSubmit(item);
  }
      
      return (
        <>
        <Container>
          <h3>Add Item</h3>
          <form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
                <Form.Text>To Do Item</Form.Text>
                <Form.Control
                    name="text"
                    placeholder="Add to Do List Item"
                    onChange={handleInputChange}
                />
            </Form.Label>    
            <Form.Label>
                <Form.Text>Assigned To</Form.Text>
                <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
            </Form.Label>
            <Form.Label>
                <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Due Date</span>
        <Form.Control type="date" name="due"  onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>
            <Button variant="primary" type="submit">Add Item</Button>
          </form>
        </Container>  
        </>
      );
}
export default TodoForm;
