import ListGroup from 'react-bootstrap/ListGroup';
import { Toast,Button} from  'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
function  TodoList(props){

  return (
    <ul>
      {props.list.map(item => (
      <Toast 
      className={`complete-${item.complete.toString()}`}
       key={item._id}
       onClose={() => props.deleteHandler(item)} value={item._id}
       style={{'text-align': 'center' , 'width' : '100%' , 'margin-left' : '250px' , 'display' : 'block' }}
     >
     <Toast.Header  style={{cursor:'pointer'}} >
     <Badge pill onClick={() => props.handleComplete(item._id)} className={item.complete ? 'bg-danger' : 'bg-success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
     
     <strong className="mr-auto" style={{'margin-left': '20px' }}>{item.assignee}</strong>
     
     
     </Toast.Header>
      
       {/* <Button variant="outline-secondary" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '} */}
       

       <Toast.Body  style={{  minHeight: '80px' , 'width' : '100%' ,'text-align' : 'left' }}  >
       <p>{item.text}</p>
       
        <small className='float-right'>difficulty : {item.difficulty}</small> 
        </Toast.Body>
       
        <Button  onClick={() => props.putHandler(item._id)}>update</Button>
       </Toast>
     
        // <ListGroup.Item style={{cursor:'pointer'}} variant={(item.complete) ? 'danger' : 'success'}
        //   className={`complete-${item.complete.toString()}`}
        //   key={item._id}
        // >
        //   <span onClick={() => props.handleComplete(item._id)}>
        //     {item.text}
        //   </span>
        //   <button onClick={() => props.handleDelete(item._id)}>Delete</button>
        //   <button onClick={() => props.handleUpdate(item._id)}>Update</button>
        // </ListGroup.Item> 
      ))}
    </ul>
  );

}

export default TodoList;