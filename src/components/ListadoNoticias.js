import React from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';

const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {
                noticias.map( (noticia, index) =>(
                    <Noticia
                        key={index}
                        noticia ={noticia}
                    />
                ))
            }
        </div>
     );
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}; 
export default ListadoNoticias;