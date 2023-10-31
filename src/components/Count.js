import React,{useState} from 'react';

const Count = () => {

    const[count,setCount] = useState(0);
    return (
        <div className='Count'>
            <div>
                <p style={{display:"inline"}}>Count :{count}</p>
                <button id='incr-cnt' onClick={()=>{setCount(count+1)}}>{count}</button>
            </div>
        </div>
    );
}

export default Count;
