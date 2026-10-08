import React from 'react';
import '../css/App.css';
import '../css/Page3.css';
import mosquitoImg from '../images/Mosquito.png';

function Page3({ prevPage, nextPage }) {
  return (
    <section className="page-section page-3">
      {/* Header */}
      <header className="page-header-title">
        <span className="header-icon">🦟</span>
        <h1>DENGUE, ZIKA Y CHIKUNGUNYA</h1>
      </header>

      {/* Main Intro Box */}
      <article className="info-card purple-border">
        <p>
          El dengue es una enfermedad viral transmitida por mosquitos con mayor presencia en las Américas y la más sospechada en pacientes febriles. Recientemente la introducción de dos nuevas arbovirosis (virus de chikungunya a finales del 2013 y del virus del Zika en el 2014) ha creado un nuevo desafío para la salud pública en las Américas.
        </p>
        <span className="virus-badge">😈</span>
      </article>

      {/* Earth Info Row */}
      <div className="earth-info-row">
        <span className="earth-icon">🌎</span>
        <p>
          Los factores ambientales y socioeconómicos facilitan la proliferación y adaptación de los vectores.
        </p>
      </div>

      {/* Activities Section (Dashed Box) */}
      <section className="activity-container">
        <div className="activity-badge">Actividades:</div>
        <div className="activity-box">
          <p className="activity-question">
            Piense, ¿ha visto mosquitos en la comunidad?
          </p>
          <hr className="dashed-divider" />
          <p className="activity-instruction">
            Haga que sus estudiantes le comenten sobre los lugares donde ha visto más mosquitos y si conocían que podían transmitir enfermedades.
          </p>
        </div>
      </section>

      {/* Transmission Section */}
      <section className="transmission-section">
        <div className="transmission-badge">¿Cómo se transmiten?</div>
        
        <p className="transmission-intro">
          No se transmiten de persona a persona, el virus necesita un vector <em>-un medio de transporte-</em>, que es el mosquito.
        </p>

        {/* Bottom Grid: Mosquito Image + Text */}
        <div className="transmission-grid">
          <div className="mosquito-image-container">
            <img src={mosquitoImg} alt="Mosquito vector" className="mosquito-image" />
          </div>

          <div className="transmission-details">
            <p>
              El dengue y zika se transmiten por mosquitos del género <strong>Aedes aegypti</strong> infectados y para chikungunya también por el mosquito <strong>Aedes albopictus</strong>.
            </p>

            <div className="dashed-tag">
              Pueden transmitirse en áreas selváticas y en áreas urbanas.
            </div>
          </div>
        </div>
      </section>

      {/* 페이지 이동 버튼 영역 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">3</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          CONTINUAR →
        </button>
      </div>
    </section>
  );
}

export default Page3;