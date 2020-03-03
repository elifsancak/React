import React, { useState } from 'react'; 

function Ex2 () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick = { () => setCount(count+1)}> click me!</button>
            <button onClick = { () => setCount(0)}>reset!</button>
        </div>
      
    )
}
export {Ex2}

