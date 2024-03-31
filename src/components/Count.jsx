import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, isReady } from '../redux/store'


function Count() {
    const count=useSelector(state=>state.count);
    const ready = useSelector(state=>state.ready)
    const dispatch=useDispatch()
    
    
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:20, height:600, backgroundColor: ready && 'red' }}>
        <button onClick={()=>dispatch(decrement())} >
        -
        </button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())} >
        +
        </button>
        <button onClick={()=>dispatch(isReady())} >
        change color
        </button>
    </div>
  )
}

export default Count