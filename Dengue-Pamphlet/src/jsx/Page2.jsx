import React from 'react';
import '../css/App.css';
import '../css/Page2.css';

function Page2({ prevPage, nextPage }) {
  return (
    <section className="page-section">
      <div className="health-details-list">

        {/* 1. Salud Humana */}
        <article className="detail-card human-card">
          <div className="card-header">
            <span className="card-icon">👤</span>
            <h2>1. Salud Humana:</h2>
          </div>
          <p>
            Si aves infectadas, transmiten la enfermedad a humanos, al ser esta una enfermedad nueva para la cual nuestros cuerpos no tienen defensas naturales, podría haber una propagación rápida de la enfermedad, ya que el virus se transmite a través de las aves y entre las personas. Esto podría llevar a una epidemia o incluso una pandemia.
          </p>
        </article>

        {/* 2. Salud Animal */}
        <article className="detail-card animal-card">
          <div className="card-header">
            <span className="card-icon">🐾</span>
            <h2>2. Salud animal:</h2>
          </div>
          <p>
            El brote de la gripe puede ocasionar que muchas aves mueran, disminuyendo las poblaciones silvestres y desequilibrando los ecosistemas silvestres. Asimismo, si muchas aves de corral mueran, tendrían un gran impacto económico para muchos productores.
          </p>
        </article>

        {/* 3. Salud Ambiental */}
        <article className="detail-card environment-card">
          <div className="card-header">
            <span className="card-icon">🌱</span>
            <h2>3. Salud Ambiental:</h2>
          </div>
          <p>
            Aparte del desequilibrio del ecosistema que causaría la muerte de poblaciones grandes, la propagación de la enfermedad en las aves de corral podría llevar a la necesidad de sacrificar a las aves infectadas para prevenir la propagación adicional de la enfermedad. Esto podría generar desafíos ambientales, como la disposición adecuada de los cadáveres de las aves, para evitar la contaminación del suelo y el agua.
          </p>
        </article>

      </div>

      <section className="highlight-box">
        <p>
          Se debe resaltar que a causa de la globalización y el crecimiento poblacional humano los animales silvestres tienen cada vez menos space y la convivencia con humanos es cada vez más cercana, lo que hace más probable que surjan enfermedades como la gripe aviar.
        </p>
        <span className="highlight-icon">👀</span>
      </section>

      {/* 페이지 이동 버튼 영역 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">2</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          SIGUIENTE →
        </button>
      </div>
    </section>
  );
}

export default Page2;