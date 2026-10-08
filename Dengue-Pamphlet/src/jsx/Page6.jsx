import React from 'react';
import '../css/App.css';
import '../css/Page6.css';

function Page6({ prevPage, nextPage }) {
  return (
    <section className="page-section page-6">
      {/* 메인 타이틀 & 서브타이틀 */}
      <header className="page6-header">
        <h2 className="title-main">ENFERMEDADES ZOONÓTICAS</h2>
        <div className="title-sub-badge">¿Cómo prevenir estas enfermedades?</div>
      </header>

      {/* 카드 1 */}
      <article className="card-box purple-card">
        <div className="card-badge badge-hand">🖐🏻</div>
        <h3 className="card-title">Evita las picaduras de mosquitos:</h3>
        <ul className="card-list">
          <li>
            <strong>Duerme bajo mosqueteros,</strong> especialmente personas enfermas, adultos mayores, embarazadas y niños pequeños.
          </li>
          <li>
            <strong>Usa ropa de manga larga,</strong> pantalones o que te cubra la piel y zapatos cerrados.
          </li>
        </ul>
      </article>

      {/* 카드 2 */}
      <article className="card-box green-card">
        <div className="card-badge badge-cross">❌</div>
        <h3 className="card-title">Elimina criaderos de mosquitos:</h3>
        <ul className="card-list">
          <li>Protege las puertas y ventanas con alambre-malla/redes contra mosquitos.</li>
          <li>Cubre bien los depósitos o barriles con agua.</li>
          <li>Vacía y mantén secas las piscinas que no usan.</li>
          <li>Lava con agua y jabón floreros y platos de macetas una vez por semana y cambia el agua.</li>
        </ul>
      </article>

      {/* 카드 3 */}
      <article className="card-box warning-card">
        <div className="card-badge badge-warning"></div>
        <div className="warning-content">
          <p>
            Si tienes fiebre, dolor de cabeza, dolor de huesos, salpullido, náuseas, vómitos o alguno de los síntomas descritos,
          </p>
          <p className="highlight-text">¡no te automediques!</p>
          <p>y visita el Centro de Salud más cercano.</p>
        </div>
      </article>

      {/* 카드 4 */}
      <article className="activities-card">
        <div className="activities-badge">Actividades:</div>
        <div className="activities-grid">
          <div className="activity-item">
            Realice un mapa de la comunidad con sus estudiantes donde se refleje los lugares donde podría ser un criadero de mosquitos.
          </div>
          <div className="activity-divider"></div>
          <div className="activity-item">
            <strong>Actividad grupal:</strong> Analice, junto a sus estudiantes, las cinco acciones preventivas más importantes, tanto en los lugares encontrados en el mapa como en sus casas.
          </div>
        </div>
      </article>

      {/* 네비게이션 버튼 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">6</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          SIGUIENTE →
        </button>
      </div>
    </section>
  );
}

export default Page6;