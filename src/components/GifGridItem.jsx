import { Fragment } from "react"

export const GifGridItem = ( { title, url, id } ) => {

    return (

        <Fragment>
            <div className="card">
                <p> { id} </p>
                <img src={ url } alt={ title } />
                <p> { title } </p>
            </div>
        </Fragment>


    )
}
