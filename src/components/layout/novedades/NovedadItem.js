//  eliminar si no las utilizo
import NovedadItem from '../components/layout/novedades/NovedadItem';


import React from 'react';

var NovedadItem = (props) => {
    var { diseño, valor_usd, opciones, imagen, body } = props;
    return (
        <div className='novedades'>
            <h2>{diseño}</h2>
            <h2>{valor_usd}</h2>
            <h2>{opciones}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ _html: body }} />
        </div>
    );
}

export default NovedadItem;