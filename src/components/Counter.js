
const Counter = ({count,handleReduction,handleIncreasement}) => {
  return (
    <div className="row">
        
    <div className="col-md-4 ">
        <button className="btn btn-danger" onClick={handleReduction}>-</button>
    </div>
    <div className="col-md-4">
        <h1>{count}</h1>
    </div>
    <div className="col-md-4 ">
        <button className="btn btn-primary" onClick={handleIncreasement}>+</button>
    </div>
 </div>
  )
}

export default Counter
