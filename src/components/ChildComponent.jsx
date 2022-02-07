import React from 'react';
function ChildComponent(props)
{
    //const  data="Mohammed Shahazad"
    const data= {name:"Shahazad", email:"sk.shahazad@gmail.com"}
    return(
        <div>
            {/* <h2>User Name:{props.name}</h2> */}
            <h2>User Name: </h2>
            <button onClick={()=>props.alert(data)}>Click Me </button>
        </div>
    )
}
export default ChildComponent;