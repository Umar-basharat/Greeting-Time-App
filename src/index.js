import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
let ctime=new Date();
ctime=ctime.getHours();
const cssstyle ={ };
if (ctime>6 && ctime<12) {
  ctime="Good Morning";
  cssstyle.color="green";

}
else if (ctime>12 &&  ctime<15)
{
  ctime="Good After Noon";
  cssstyle.color="yellow";
}
else if (ctime>15 && ctime<18){
  ctime="Good Evening";
  cssstyle.color="orange";

}
else{
  ctime="Good Night";
  cssstyle.color="black";
}

ReactDOM.render(
  
<>

<div className='main'>

<h2>Hello Sir,<span style={cssstyle}>   {ctime} </span> </h2> 
<h2>From Umar Basharat</h2>
</div>

</>,

document.getElementById('root')




 


);


