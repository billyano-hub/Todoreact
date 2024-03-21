import React from 'react';
import ReactDOM from 'react-dom/client';
import pa7 from "./pa7.png"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let projectName= "PropertyArchive"

let banner=<h1 className="text-info  noround alert-danger"> You are welcome to {projectName}</h1>
const mybanner=ReactDOM.createRoot(document.getElementById("banner"));
mybanner.render(banner);

let bsclass="text-primary"
let greetings =<p className={bsclass}>Hello world! I am happy {5+10} to be a developer.</p>
const mycontent=ReactDOM.createRoot(document.getElementById("content"));
mycontent.render(greetings);


let bg =<img src={pa7} className='img-fluid' />
const myconten=ReactDOM.createRoot(document.getElementById("banner"));
myconten.render(bg);

const myconte=ReactDOM.createRoot(document.getElementById("content"));
myconte.render(<><h1>About Us</h1><p>This is the content..</p></>);

      
const footer=ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<div className='px-5'>Developed by Me &copy; 2023.</div>)

const mymenu=ReactDOM.createRoot(document.getElementById("menu"));
mymenu.render( <ul><li><a href="#">Home</a></li><li><a href="#">Footer</a></li></ul>);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



reportWebVitals();
