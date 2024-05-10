import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const FACT_URL = 'https://catfact.ninja/fact'
  const IMAGE_URL = (threeFirstWords) => `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`

  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    // GET de hecho aleatorio
    fetch(FACT_URL)
      .then(res => res.json())
      .then(data => {
        // seteo del nuevo hecho que se obtiene
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    // si fact es null devuelve null
    if (!fact) return

    // toma las 3 primeras palabras del hecho
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    // setea la nueva imagen
    const newImageURL = IMAGE_URL(threeFirstWords)
    setImageURL(newImageURL)

  }, [fact])

  return (
    <main>
      <h1>App de gatos</h1>

      <section>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt={`Image extracted using the three first word of ${fact}`}></img>}
      </section>


    </main>
  )
}

export default App
