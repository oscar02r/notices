import React from "react";
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
  const { urlToImage, url, title, source, description } = noticia;
  const imagen = urlToImage ? <img src={urlToImage} alt={title} /> : null;
  return (
    <div className="col s12 m6 l4  ">
      <div className="card">
        <div className="card-image">
          {imagen}
          <span className="card-title">{source.name}</span>
        </div>

        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            {" "}
            Ver Noticia Completa
          </a>
        </div>
      </div>
    </div>
  );
};
Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
}
export default Noticia;
