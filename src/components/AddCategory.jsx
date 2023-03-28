import { Fragment } from "react"
import { useState } from "react"

export const AddCategory = ( { newCategory } ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setinputValue( target.value );
        //console.log(inputValue);
    }

    const onSubmitCategory = (event) => {
        // preventDefault ayuda amantener los datos del formulario sin recargar la pagina
        event.preventDefault();
        //console.log(event.target);

        // Verificar que no se envien espacios en blanco - .trim elimina espacios vacios de un string
        if ( inputValue.trim().length <=1 ) return;
            

        newCategory(inputValue);
        setinputValue(''); // Limpiar el input
    }

  return (

    <Fragment>
        <form onSubmit={ onSubmitCategory } aria-label='form'>
            <input type='text' 
            placeholder='search gifs...'
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
            />
        </form>
    </Fragment>

  )
}
