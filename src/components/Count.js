import React,{useState} from 'react';

const Count = () => {

    const[count,setCount] = useState(0);
    return (
        <div className='Count'>
            <div>
                <p style={{display:"inline"}}>Count :{count}</p>
                <button onClick={()=>{setCount(count+1)}}>+</button>
            </div>
        </div>
    );
}

export default Count;
