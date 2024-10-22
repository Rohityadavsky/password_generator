import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length , setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i=1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])

  const copypasswordClipboard = () =>{
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard")
  }
 
  return (
    <div>

    <div className='top'>
      <h1>Password Generator</h1>
      </div>
      <div className='mid'>
      <input type="text"
      placeholder='password'
      value={password}
      disabled={true}
      readOnly
       />
      </div>
      <div className='mid'>
        <label>Password Length:</label>
        <input type="number" value={length} onChange={(e)=>setlength(e.target.value)}/>
      </div>
      <div className='mid'>
        <button onClick={copypasswordClipboard}>Copy</button>
      </div>
      <div className='mid'>
        <label>Include Numbers:</label>
        <input type="checkbox" checked={numberAllowed} onChange={(e)=>setnumberAllowed(e.target.checked)}/>
      </div>
      <div className='mid'>
        <label>Include Special Characters:</label>
        <input type="checkbox" checked={charAllowed} onChange={(e)=>setcharAllowed(e.target.checked)}/>
      </div>
     
      </div>
  )
}

export default App
