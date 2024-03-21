import Title from "./Title.js";
import Staff from "./Staff.js";

function Content(props){
    return <div className="col"><h1>{props.coy}</h1><i>{props.tot}years still counting</i><Staff/><Title/></div>
}

export default Content;