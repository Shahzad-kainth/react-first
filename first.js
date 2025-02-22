import React  from "react";
import ReactDOM from "react-dom/client";
const element1=<h1>Hello Coder ARmy</h1>;
//JSX : JS experession (output laake de) result produce kare
//JSX:Statement (unko aap nahi likh skthy)
function Greek(props){
    console.log(props);
    return <h2>Assamalamoalaiku bhyia kaisy hu {props.name} {props.age}</h2>
}
const element2=<Greek name="Rohit" age="23"/>;
const element3=<h1 id="first" className="Second"></h1>;
//<Greek/> function call in JSX
const Root=ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);

