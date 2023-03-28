import { Fragment } from "react"
import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    // Codigo js aqui , en el return es js de react
    // Un hook es una funcion predeterminada en react
    const [categorias, setCategorias] = useState(['']);

    const onAddCategory = (newCategoryAdded) => {
        //Analizar si la categoria insertada ya existe en el array - validacion
        if (categorias.includes(newCategoryAdded)) return;

        // ... operador spret (Copiar todo lo demas del array)
        setCategorias([ newCategoryAdded, ...categorias]);
    }

    return (
        <Fragment>

            {/* Titulo */}
            <h1>GifApp</h1>

            {/* Input - Buscador */}
            <AddCategory newCategory={(value) => onAddCategory(value)} />

            {/* Listado de los Gifs */}

            {
                categorias.map((cat) =>
                (
                    <GifGrid key={cat} category={cat} />
                )
                )
            }

            {/* Gif item */}
        </Fragment>

    )
}
