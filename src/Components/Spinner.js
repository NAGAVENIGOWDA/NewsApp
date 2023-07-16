import React  from 'react'
import loading from './Spinner.gif'

export function Spinner(){
  
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <img src={loading} alt="Loading..." width={30} />
      </div>
    )
  }


export default Spinner
