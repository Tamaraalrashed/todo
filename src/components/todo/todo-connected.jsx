  
import React, { useEffect, useState } from 'react';
import TodoForm from './form';
import TodoList from './list';

import {Badge} from 'react-bootstrap';

  import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {

    const [list, setList] = useState([]);
  
    const _addItem = (item) => {
      item.due = new Date();
      fetch(todoAPI, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList([...list, savedItem])
        })
        .catch(console.error);
    };
  
    const _toggleComplete = id => {
  
      let item = list.filter(i => i._id === id)[0] || {};
  
      if (item._id) {
  
        item.complete = !item.complete;
  
        let url = `${todoAPI}/${id}`;
  
        fetch(url, {
          method: 'put',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item)
        })
          .then(response => response.json())
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
          })
          .catch(console.error);
      }
    };
  
    const _getTodoItems = () => {
      fetch(todoAPI, {
        method: 'get',
        mode: 'cors',
      })
        .then(data => data.json())
        .then(data => setList(data.results))
        .catch(console.error);
    };
  
    useEffect(_getTodoItems, []);
  
    return (
      <>
        <header>
       
          <h2>
          <Badge variant="dark"  style={{'width': '96%' ,'margin' : '2%' , 'boarder-radios' : 'none' , 'padding' : '20px 30px' , 'text-align' : 'left', 'background':'black'}}>
          To Do List Manager ({list.filter(item => !item.complete).length})  
        </Badge>
          </h2>
        </header>
  
        <section className="todo">
  
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>
  
          <div>
            <TodoList
              list={list}
              handleComplete={_toggleComplete}
              // deleteTask={_deleteTask}
            />
          </div>
        </section>
      </>
    );
  };
  
  export default ToDo;