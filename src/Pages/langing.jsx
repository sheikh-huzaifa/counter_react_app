import React , {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../Components/button'



const Langing = props => {
    const [count , setCount] = useState(0);
    console.log(count);
    
        
            const handler1 =()=> setCount((prewCount) => prewCount + 1);
        
        
            const handler2 =()=> setCount(count -1)
        
        
            const handler3 =()=>  setCount(0)
        
  return (
    <div className='container mt-5'>
    
    
    <div className="row text-center fs-1"><div className="col-2 offset-5 mt-5">{count}</div></div>
    <div className="row ms-5 ps-3 mt-5">
    <div className='offset-4 col-1  '><Button color="btn-success" text="Increment" handler={handler1}/></div>
    <div className='col-1 ms-3'><Button color="btn-warning" text="Reset"  handler={handler3}/></div>
    <div className='col-1 ms-3'><Button color="btn-danger"  text="Decrement"  handler={handler2}/></div>
    </div>
    
    </div>
  )
}

Langing.propTypes = {}

export default Langing