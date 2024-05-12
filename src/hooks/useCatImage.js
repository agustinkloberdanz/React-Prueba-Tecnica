import { useState, useEffect } from "react"
import { IMAGE_URL } from "../https"

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        // si fact es null devuelve null
        if (!fact) return

        // toma las 3 primeras palabras del hecho
        const threeFirstWords = fact.split(' ', 3).join(' ')

        // setea la nueva imagen con las 3 palabras
        const newImageURL = IMAGE_URL(threeFirstWords)
        setImageURL(newImageURL)
    }, [fact])  

    return { imageURL }
}
