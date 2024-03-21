
const Content = ({todos}) => {
  if(todos.length==0){
      return <p className="text-center py-5 text-danger">YOU HAVE NOT PLANNED YOUR LIFE</p>
  }
  else{
  return (
    <div className="row py-5 bg-primary ">
      {
        todos.map(function(todo,index){

          return <p key={todo.id} className="text-warning">{todo.task}</p>
        })
      }
    </div>
  )}
}

export default Content
