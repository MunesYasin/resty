import React from "react";

function History (props){
 return(
<div>
  {  console.log(props.history)}
    <ul>

       { props.history && 
       props.history.map((data)=>{
           return(
               <li>
             <button onClick={()=>{props.callApi(null,data.requestParams)}}> {`${data.requestParams.method} - ${data.requestParams.url}`  }</button>
             <br/>
              </li>
           )
       })}
    </ul>
</div>
    
 )
}
export default History