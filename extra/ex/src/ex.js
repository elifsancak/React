import React, { useState } from 'react'; 
const Ex1= () => {
    const [count, setCount] = useState(0);
    return (
 <div>
   <h1>{count}</h1>
   
   <button onClick={() => setCount(count+1)}>click me!</button>
  
 </div>
 )
 }
 export {Ex1}
 //
 //<div>
   //{ count % 3 ? <p>{count}</p> : <p>Fizz</p>}
   
   //<button onClick={() => setCount(count+1)}>click me!</button>
  
 //</div>
//)
//}
