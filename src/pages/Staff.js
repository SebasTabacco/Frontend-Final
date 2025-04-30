import React from 'react';
import './../styles/components/pages/Staff.css';
  

function Staff() {
  return (
    <main className="contenedor">
      <div className='admin'>
        <img src="/image/nosotros/administracion.webp" alt='admin' />
        <h2 className="titulo">Administracion</h2>
        <p className="descripcion">
          Como máximo órgano de dirección de la empresa, la Junta Directiva se compromete a servir a los intereses de la empresa y a,
          lograr un crecimiento sostenible del valor de la empresa.
          A continuación, también encontrará más información sobre la gestión de nuestros negocios.
        </p>
      </div>
      <div className='admin-2'>
        < img src='/image/nosotros/admin-img.png' alt='nos-adm'/>
      </div>
      <div className="staff-container">
      <div className="staff-member">
        <img src="/image/nosotros/matias.webp" alt="CEO" />
        <h3>Matías Rebelde</h3>
        <p>Presidente y Director Ejecutivo</p>
      </div>
      <div className="staff-member">
        <img src="/image/nosotros/cedrik.webp" alt="Gerente" />
        <h3>Cedrik Neike</h3>
        <p>Director Financiero</p>
      </div>
      <div className="staff-member">
        <img src="/image/nosotros/ralf.webp" alt="Prorg." />
        <h3>Ralf P. Thomas</h3>
        <p>Miembro de la Junta Directiva</p>
      </div>
      <div className="staff-member">
        <img src="/image/nosotros/judith.webp" alt="Staff 4" />
        <h3>Judith Wiese</h3>
        <p>Miembro de la Junta Directiva</p>
      </div>
      <div className="staff-member">
        <img src="/image/nosotros/varonika.webp" alt="Staff 5" />
        <h3>Veronika Bienert</h3>
        <p>Miembro de la Junta Directiva</p>
      </div>
      <div className="staff-member">
        <img src="/image/nosotros/peter.webp" alt="Staff 6" />
        <h3>Peter Koerte</h3>
        <p>Miembro de la Junta Directiva</p>
      </div>
    </div>
    </main>
  );
}

export default Staff;