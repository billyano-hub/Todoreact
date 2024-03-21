import {useState} from 'react'
const TodoForm = ({addTodo}) => {
    const[todo,setTodo]=useState(" ");

    function handleSubmit(event){
        event.preventDefault();
        if(todo ===""){
            alert("Please enter a plan")
        }
        else{
            addTodo(todo);
            setTodo("");
        }
    }
  return (
    <div className="row py-5">
      <form className='row' onSubmit={handleSubmit}>
        <div className="col-md-8">
            <input className="form-control" type='text' value={todo} 
                onChange={(event)=>{setTodo(event.target.value)}}
            />
        </div>
        <div className="col-md-4">
            <input type="submit" value='Add Todo' className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default TodoForm
