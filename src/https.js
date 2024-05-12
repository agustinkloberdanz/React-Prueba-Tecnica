export const IMAGE_URL = (threeFirstWords) => `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`

const FACT_URL = 'https://catfact.ninja/fact'
export const getRandomFact = () => {
    // GET de hecho aleatorio
    return fetch(FACT_URL)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}