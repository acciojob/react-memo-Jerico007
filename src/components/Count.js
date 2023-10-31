import React,{useState} from 'react';

const Count = () => {

    const[count,setCount] = useState(0);
    return (
        <div className='Count'>
            <div>
                <p id='incr-cnt' style={{display:"inline"}}>Count :{count}</p>
                <button id='incr-btn' onClick={()=>{setCount(count+1)}}>{count}</button>
            </div>
        </div>
    );
}

export default Count;
