import React from 'react';
import ChildComponent from '../components/ChildComponent';
function ParentComponent(){
   // let data="Shahazad"
    function parentAlert(data){  // Child to parent data passing
        console.log("Date from Child Component", data);
        alert(data.name)
    }
    return(
        <div>
            <h1>Lifting State Up</h1>
            <ChildComponent alert={parentAlert}/>
            {/* <ChildComponent name={data}/> */}
        </div>
    )
}
export default ParentComponent