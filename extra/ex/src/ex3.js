import React, { useState } from 'react';

function Ex3 () {

    const [count, setCount] = useState(0);

    return (
        <div>
            
            <h1>{(count === 0) ? <p>{count}</p> : (count % 3 === 0 && count % 5 !== 0) ? <p>Fizz</p> : (count % 3 !== 0 && count % 5 === 0) ? <p>Buzz</p> : (count % 3 === 0 && count % 5 === 0)  ? <p>FizzBuzz</p> : <p>{count}</p>}</h1>
            <button onClick = { () => setCount(count+1)}>click me!</button>
            <button onClick = { () => setCount(0)}>reset!</button>
        </div>
    )  

}
export {Ex3}