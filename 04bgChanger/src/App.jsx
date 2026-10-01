import { useState } from 'react'

function App() {
  const Default_Color = "olive"
  const [color, setColor] = useState(Default_Color)

  const toogleColor = (newColor) => {
    if(color === newColor){
      setColor(Default_Color)
    }
    else{
      setColor(newColor)
    }
  }
 
 return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
          style={{backgroundColor: "red" }} onClick={() => toogleColor("red")}>Red</button>
          
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
          style={{backgroundColor: "green"}} onClick={() => toogleColor("green")}>Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
          style={{backgroundColor: "pink"}} onClick={() => toogleColor("pink")}>Pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
          style={{backgroundColor: "blue"}} onClick={() => toogleColor("blue")}>Blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
          style={{backgroundColor: "lavender"}} onClick={() => toogleColor("lavender")}>Lavender</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow"
          style={{backgroundColor: "yellow"}} onClick={() => toogleColor("yellow")}>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
