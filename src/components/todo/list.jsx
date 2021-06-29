import ListGroup from 'react-bootstrap/ListGroup';
// import { Badge ,Toast} from  'react-bootstrap'
function  TodoList(props){

  return (
    <ul>
      {props.list.map(item => (
        
        <ListGroup.Item style={{cursor:'pointer'}} variant={(item.complete) ? 'danger' : 'success'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <button onClick={() => props.handleDelete(item._id)}>Delete</button>
          <button onClick={() => props.handleUpdate(item._id)}>Update</button>
        </ListGroup.Item> 
      ))}
    </ul>
  );

}

export default TodoList;