import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      contador: {contador};
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  )
}
export default App;
