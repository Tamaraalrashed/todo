import ListGroup from 'react-bootstrap/ListGroup';
import { Badge ,Toast} from  'react-bootstrap'
function  TodoList(props){

  return (
    <ul>
      {props.list.map(item => (
      <Toast 
      className={`complete-${item.complete.toString()}`}
       key={item._id}
       onClose={() => props.deleteH(item._id)} value={item._id}
       style={{'text-align': 'center' , 'width' : '100%' , 'margin-left' : '250px' , 'display' : 'block' }}
     >
     <Toast.Header  style={{ }}>
     <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
     <strong className="mr-auto" style={{'margin-left': '20px' }}>{item.assignee}</strong>
     
     
     </Toast.Header>
      
       {/* <Button variant="outline-secondary" onClick={()=>toggle(item._id)} value={item._id}>Edit</Button>{' '} */}
       

       <Toast.Body onClick={() => props.handleComplete(item._id)}  style={{  minHeight: '80px' , 'width' : '100%' ,'text-align' : 'left' }}  >
       <p>{item.text}</p>
       
        <small className='float-right'>difficulty : {item.difficulty}</small> 
        </Toast.Body>
       
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