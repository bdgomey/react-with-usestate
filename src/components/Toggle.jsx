
import React, { useState } from 'react'

const Toggle = () => {
  const [isClicked, setIsClicked] = useState(true)
  const [user, setUser] = useState({name: 'Brian'})
  
  
  
  return (
    <div>
        {
            isClicked?
            <div>
            <h1>Please Click</h1>
            <button className='btn' onClick={() => setIsClicked(false)}>Click Me!!</button>
            </div>
            :
            <div>
            <h1>{user.name}</h1>
            <button className='btn' onClick={() => setIsClicked(true)}>Click Me!!</button>
            </div>
        }
    </div>
  )
}

export default Toggle