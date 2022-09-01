import { useRef } from "react";

const App = () => {
  const ref = useRef()
  const inputRef = useRef()
  const click = () => {
    console.log(ref.current.clientHeigth)
    ref.current.innerHTML = 'Hola Mundo'
  }
  const focus = () => {
    inputRef.current.focus()
  }
  return(
    <div>
      <input ref={inputRef}/>
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>la la la</div>
    </div>
  )
}
export default App;