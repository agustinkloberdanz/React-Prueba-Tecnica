import { useCatImage } from "./hooks/useCatImage"

export function Otro() {

    const { imageURL } = useCatImage({ fact: 'cat' })
    console.log(imageURL)


    return (
        <>
            {imageURL && <img src={imageURL} alt="otro gato" />}
        </>
    )
}