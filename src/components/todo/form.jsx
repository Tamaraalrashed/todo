import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props){
    const [item,setItem]=useState({});


    const handleInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value  });
        console.log('7 items', item);
      };

 
     const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        props.handleSubmit(item);
        const itemObj= {};
        // console.log('15 items', itemObj);
        setItem(itemObj);
      };
      
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
            <Button variant="primary" type="submit">Add Item</Button>
          </form>
        </Container>  
        </>
      );
}
export default TodoForm;
