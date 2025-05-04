import React, { useEffect, useState } from 'react';

const Novedades = () => {
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/novedades")
            .then(res => res.json())
            .then(data => {
                console.log("Datos recibidos en frontend:", data); 
                if (Array.isArray(data)) {
                    setNovedades(data);
                } else {
                    console.error("Error: el backend no devolvió un array.");
                }
            })
            .catch(error => console.error("Error al cargar novedades:", error));
    }, []);

    return (
        <section className='holderNov'>
            <h2>Novedades</h2>
            <div className="row">
                {/* Aquí es donde debes poner el mapeo */}
                {novedades.map((novedad) => (
                    <div key={novedad.id} className="col-md-4">
                        <div className="card">
                            <img src={novedad.imagen} alt={novedad.titulo} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{novedad.titulo}</h5>
                                <p className="card-text">Diseño: {novedad.diseno}</p>
                                <p className="card-text">Valor USD: {novedad.valor_usd}</p>
                                <p className="card-text">Opciones: {novedad.opciones}</p>
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Novedades;



