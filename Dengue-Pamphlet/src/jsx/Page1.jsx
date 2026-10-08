import React from 'react';
import '../css/App.css';
import '../css/Page1.css';
import diagramImg from '../images/Diagram.jpg';

function Page1({ prevPage, nextPage }) {
  return (
    <section className="page-section">
      <div className="page-header">
        <strong>ENFOQUE UNA SALUD</strong>
      </div>

      {/* 상단 점선 테두리 카드 2개 */}
      <div className="intro-grid">
        <article className="objective-card">
          <h2>Objetivo del tema:</h2>
          <p>
            Explicar la relación entre la salud humana,
            la salud animal y la salud medioambiental.
            Este es un tema transversal a todos los demás
            temas, por lo que se irá haciendo referencia
            a esta relación a lo largo de todo el taller.
          </p>
        </article>

        <article className="concept-card">
          <h2>El concepto:</h2>
          <p>
            El enfoque de “Una Salud” reconoce la conexión
            entre la salud humana, la salud animal y la
            salud medioambiental. Hace énfasis en la
            interdependencia entre estos tres ámbitos y
            el impacto que uno tiene en los otros y en
            el bienestar global.
          </p>
        </article>
      </div>

      {/* 중앙 박스 */}
      <section className="example-section example-box">
        <h2>Por ejemplo:</h2>
        <p>
          Supongamos que aparece un brote de una enfermedad
          zoonótica (enfermedad que se transmite de los animales
          a los humanos o viceversa), como la gripe aviar.
          Esta afecta a muchas aves silvestres, a aves de corral
          como las gallinas y puede incluso transmitirse a los
          humanos.
        </p>
        <p className="example-subtext">
          A continuación, explicamos la conexión entre los tres
          aspectos de “Una Salud”:
        </p>
      </section>

      {/* 다이어그램 이미지 */}
      <section className="health-diagram-section">
        <img 
          src={diagramImg} 
          alt="Diagrama de Una Salud" 
          className="diagram-image" 
        />
      </section>

      {/* 하단 설명 박스 */}
      <section className="message-box">
        <p>
          Es así que este enfoque busca lidiar con desafíos
          complejos de la salud pública, como son las
          enfermedades zoonóticas, desde diferentes disciplinas
          como <strong>la medicina, la sanidad, la veterinaria,
          ecología y ciencias ambientales.</strong>
        </p>
      </section>

      {/* 하단 라인 강조 메시지 */}
      <div className="bottom-message">
        <span className="color-orange">¡Si cuidamos </span>
        <span className="color-green">uno, </span>
        <span className="color-yellow">cuidamos </span>
        <span className="color-green">a </span>
        <span className="color-navy">todos!</span>
      </div>

      {/* 페이지 이동 버튼 영역 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">1</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          SIGUIENTE →
        </button>
      </div>
    </section>
  );
}

export default Page1;