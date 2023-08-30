import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
    const valid = true
    const move =()=>{
        if(valid){
            navigate("profile/123")
        }
    }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={move}>Move</button>
    </div>
  )
}
