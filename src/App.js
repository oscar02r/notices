import React, { useState, useEffect }from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias   ] = useState([]);

  useEffect(() => {
    if(categoria.trim() === '') return;

   const consultarApi =  async () => {
         const url =`http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=08e1c1de7aed42ca83cf08e582ccd988`;

         const respuesta = await fetch(url);
         const noticias =  await respuesta.json();
         guardarNoticias(noticias.articles);
   }
   consultarApi();
  }, [categoria]);

  return (
    <>
    <Header
      titulo="Buscador de Noticias"
    />
      <div className="container white">
        
       <Formulario
          guardarCategoria= {guardarCategoria}
       />
      </div>
    </>
  );
}

export default App;
