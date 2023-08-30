import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
const navigate = useNavigate()

const valid = true;

const move2 =()=>{
    if(valid){

        navigate("/profile/123")
    }
}

  return (
    <div>
      <h1>About</h1>
      <button onClick={move2}>Move2</button>
    </div>
  )
}
