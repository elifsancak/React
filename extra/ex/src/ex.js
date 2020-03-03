import React, { useState } from 'react'; 

function Ex1 () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick= { () => setCount(count+1)}>click me!</button>
    </div>
  )
}

 export {Ex1}

//  function Second (){
//   const [count,setCount] = useState(0)    const handleClick = () => {
//       setCount( () => {
//           return(count + 1)
//       })
//   }
//   const handleReset = () => {
//       setCount( 0)
//   }    
//   return(
//       <div>
//           <h1>{count}</h1>
//           <button onClick={handleClick}>click me!</button>
//           <button onClick={handleReset}>reset</button>
//           <br />
//       </div>
//   )
// }export default Second



 //
 //<div>
   //{ count % 3 ? <p>{count}</p> : <p>Fizz</p>}
   
   //<button onClick={() => setCount(count+1)}>click me!</button>
  
 //</div>
//)
//}
