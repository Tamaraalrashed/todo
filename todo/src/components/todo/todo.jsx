import React ,{useState, useEffect}from 'react';
import './todo.scss'
import TodoForm from './form';
import TodoList from './list';
import {Container,Col,Row,Card} from 'react-bootstrap';


const ToDo= (props)=>{
    const [list, setList]=useState([]);

    
    const  addItem = (item) => {
        item._id = Math.random();
        item.complete = false;
        setList( [...list, item]);
      };
    
     const toggleComplete = id => {
    
        let item = list.filter(i => i._id === id)[0] || {};
    
        if (item._id) {
          item.complete = !item.complete;
          let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
          setList(list1);
        }
    
      };
    


      useEffect(()=> {
    
        let list = [
          { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
          { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
          { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
          { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
          { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
        ];
    
        setList(list);
      },[]);

      useEffect(() => {

        if (list.length >0) { 
          let complete = list.filter(item => !item.complete).length
          let incomplete = list.length - list.filter(item => !item.complete).length
          document.title = `complete/incomplete : ${complete} : ${incomplete}` 
        }
      }, [list]);

      return (
        <>
          <header>
            <h2>
            There are {list.filter(item => !item.complete).length} Items To Complete
            </h2>
          </header>
          <Container fluid="md" style={{ marginTop: '4rem' }}>
           <Row className="justify-content-md-center">
            <Col md={3}>
             <Card >
              <TodoForm handleSubmit={addItem} />
             </Card>
            </Col>
            <Col md={{ span: 7, offset: 0 }}>
             <div>
              <TodoList
                list={list}
                handleComplete={toggleComplete}
              />
             </div>
            </Col>
           </Row>
          </Container>
        </>
      );
}

export default ToDo;
