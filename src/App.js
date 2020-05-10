import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {

  /*State Principal
   * ciudad = state
   * setCiudad = this.setState({ })
   */
  const [ ciudad, setCiudad ] = useState('');
  const [ pais, setPais ] = useState('');
  const [ error, setError ] = useState(false);
  const [ resultado, setResultado ] = useState({});

  //useEffect
  useEffect(() => {

    //Prevenir primera ejecucion
    if(ciudad === '') return;

    const consultarAPI = async () => {

      const appId = '9e3ef5e812cf46985718d285c2c669ba';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${appId}`;

      //consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setResultado(resultado);
  }

    consultarAPI();
  }, [ ciudad, pais ]);

  const datosConsulta = datos => {
    
    //validad que los datos esten
    if(datos.ciudad === '' || datos.pais === ''){
      //error
      setError(true);
      return;
    }

    //Ciuddad y pais existen agregarlos al state
    setCiudad(datos.ciudad);
    setPais(datos.pais);
    setError(false);
  }

  //Cargar un componente condicionalmente
  let componente;
   if(error){
     //Hay un error mostrar componente
     componente = <Error mensaje = 'Ambos campos son obligatorios' />
   } else if (resultado.cod === "404") {
    componente = <Error mensaje = 'La ciudad no existe en nuestros registros' />
   } else {
     //no hay error mostrar clima
     componente = <Clima 
                    resultado = {resultado}/>;
   }

  return (
    <div className="App">
      <Header 
        titulo ='Clima React App' 
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta = {datosConsulta}
              />

            </div>
            <div className="col s12 m6">
              { componente }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
