import React from 'react';

const NovedadItem = ({ novedad }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={novedad.imagen} alt={novedad.titulo} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{novedad.titulo}</h5>
                    <p className="card-text">Diseño: {novedad.diseño}</p>
                    <p className="card-text">Valor USD: {novedad.valorUSD}</p>
                    <p className="card-text">Opciones: {novedad.opciones}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default NovedadItem;

