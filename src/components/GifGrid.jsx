import { Fragment } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    //Va entre corchetesa
    const { images } = useFetchGifs( category );

    return (

        <Fragment>
            <h4>{category}</h4>
            <div className="card-grid">
                {
                    images.map( (img) => (
                       <GifGridItem key={ img.id }
                                    {... img} // Mandar todas las propiedades
                                     />
                    ))
                }
            </div>
        </Fragment>

    )
}
