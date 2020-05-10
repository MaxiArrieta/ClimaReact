import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {

    /*state del componente
     * busqueda = state
     * guardarBusqueda = this.setState({ });
     */
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: '',
    })

    const  handleChange = e => {
        //Cambiar el state
        guardarBusqueda({
            
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = e => {
        e.preventDefault();

        //pasar la busqueda hacia el componente principal
        datosConsulta(busqueda);
    }

    return (  
        <form
            onSubmit={consultarClima}
        >
            
            <div className="input-field">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select name="pais" onChange={handleChange}>

                    <option value="">--Selecciona un pais--</option>
                    <option value="DE">Alemania</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="KR">Corea del Sur</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="FR">Francia</option>
                    <option value="IT">Italia</option>
                    <option value="JP">Japon</option>
                    <option value="MX">Mexico</option>
                    <option value="PE">Peru</option>
                    <option value="GB">Reino Unido</option>
                    <option value="RU">Rusia</option>
                    <option value="UY">Uruguay</option>

                </select>
            </div>

            <div className="input-field col-s12">
                <input type="submit" 
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar clima"
                />
            </div>
        </form>
    );
}
 
export default Formulario;