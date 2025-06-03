import react from 'react';
import { useState } from 'react';
function home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
        
    }
    function decrement(){
        if (count > 0){
        setCount(count - 1);}
        else {
            console.log("Count cannot be negative");
        }
    }

    console.log(count);


  return (  
    <div>
        <h1>Teste</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>Count: {count}</p>
    </div>
    );
}
export default home;