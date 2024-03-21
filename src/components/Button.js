
const Button = ({count}) => {
    
    const greet = () => {
      alert ( "Hello World!"
      )
    }
    
    const handleUsername = (event) => {
      console.log (
        event.target.value
      )
    }
        
  return (
    <div className="my-5">
        <input type="text" name="username" onChange={handleUsername} />

    
        <input type="number" value={count} className="form-control my-5" />
       

        <button className="btn btn-primary" onClick={greet}>Click Me</button>
    </div>
  )
}

export default Button
