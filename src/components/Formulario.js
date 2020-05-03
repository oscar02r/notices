import React from "react";
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

  const OPCIONES = [
      { value:'general', label:'General'},
      { value:'business', label:'Negocios'},
      { value:'entertaiment', label:'Entretenimiento'},
      { value:'health', label:'Salud'},
      { value:'science', label:'Ciencia'},
      { value:'sports', label:'Deportes'},
      { value:'technology', label:'Tecnología'},
  ];
  const [categoria, SelectNoticias] = useSelect('technology',OPCIONES);

  const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
  }
  return (
      <div className={`${styles.buscador} row`}>
        
       <div className="col s12 m8 offset-m2">
        <form
          onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuntra Noticias por Categoria</h2>
          <SelectNoticias

          />
        <div className="input-field col s12">
          
          <input type="submit" 
            className={`${styles.btn_block} btn-large amber darken-2`} 
            value="Buscar"
          
          />
        </div>
      </form>
    </div>
      </div>
  );
};

Formulario.propTypes = {
    guardarCategoria:PropTypes.func.isRequired
};
export default Formulario;
