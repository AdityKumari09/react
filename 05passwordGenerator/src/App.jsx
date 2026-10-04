import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  
  const[length, setLength] = useState(8)
  const[numbersAllowed, setNumbers] = useState(false)
  const[charsAllowed, setChars] = useState(false)
  const[password, setPassword] = useState()

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str += "0123456789"
    if(charsAllowed) str += "!@#$%^&*-_+={}[]~`"

    for(let i = 1; i <= length; i++){
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numbersAllowed, charsAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charsAllowed])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-gray-800"
          placeholder="Password"
          readOnly
          ref={passwordRef} // Links the DOM node to passwordRef.current
          />
          <button onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex- items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className="curor-pointer"
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberInput"
            onChange={() => {setNumbers((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charsAllowed}
            id="characterInput"
            onChange={() => {setChars((prev) => !prev)}}/>
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
