import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './otro'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cats App</h1>

      <button onClick={handleClick}>Get new cat</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Image extracted using the three first word of ${fact}`}></img>}
        <Otro></Otro>
      </section>


    </main>
  )
}

export default App
