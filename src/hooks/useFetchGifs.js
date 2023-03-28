import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

//Los hooks son funciones que rotornan algo

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await  getGifs( category );
        setImages(newImages);
    }

    // useEffects ejecuta efectos secuendarios al realizar una accion
    useEffect(() => {
        getImages();
    }, [])

    return {
        images
    }

}
