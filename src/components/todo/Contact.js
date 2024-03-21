import { useState } from "react";

const Contact = () => {
    const[fullname,setFullname]=useState("");
    const[message,setMessage]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(fullname===""|| message===""){
            alert("All fields are required")
        }else{
            console.log(fullname,message)
            alert(`Thank you for messaging us ${fullname}, Your message ${message} has been delivered. Expect our response`)
        }
    }
  return (
    <div className="row">
      <h1 className="text-center">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
            <label>Fullname</label>
            <input type="text" 
                value={fullname}
                onChange={(event)=>{setFullname(event.target.value)}}
                className="form-control"
            />
        </div>
        <div className="row py-5">
            <label>Message</label>
            <textarea 
                value={message}
                onChange={(event)=>{setMessage(event.target.value)}}
                className="form-control"
            ></textarea>

        </div>
        <input type="submit" value="Send Message" className="btn btn-danger"/>
      </form>
    </div>
  )
}

export default Contact;
