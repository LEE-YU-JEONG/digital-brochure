import { useState } from 'react';
import '../css/App.css';
import '../css/Page5.css';

function Page5({ prevPage, nextPage }) {
  const [answers, setAnswers] = useState({
    q1: '',
    q2_1: '',
    q2_2: '',
    q3: '',
    q4_1: '',
    q4_2: '',
    q5_1: '',
    q5_2: '',
    q5_3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="page-section page-5">
      {/* Header - 크기가 확대된 타이틀 */}
      <header className="quiz-header">
        <div className="quiz-title-row">
          <span className="star-icon">✦</span>
          <h2>Preguntas</h2>
        </div>
        <p className="quiz-subtitle">Responde en tus palabras</p>
      </header>

      {/* 질문 1 (Dark Grey/Slate) */}
      <article className="quiz-card dark-card">
        <p className="quiz-question">
          • En tus palabras, cómo definirías el "Dengue Zika y Chikungunya"
        </p>
        <textarea
          name="q1"
          value={answers.q1}
          onChange={handleChange}
          className="line-textarea"
          rows={2}
        />
      </article>

      {/* 질문 2 (Orange) */}
      <article className="quiz-card orange-card">
        <p className="quiz-question">
          • Menciona al menos dos formas en las que se transmite esta enfermedad:
        </p>
        <div className="line-row">
          <span className="row-num">1.</span>
          <input
            type="text"
            name="q2_1"
            value={answers.q2_1}
            onChange={handleChange}
            className="line-input"
          />
        </div>
        <div className="line-row">
          <span className="row-num">2.</span>
          <input
            type="text"
            name="q2_2"
            value={answers.q2_2}
            onChange={handleChange}
            className="line-input"
          />
        </div>
      </article>

      {/* 질문 3 (Green) */}
      <article className="quiz-card green-card">
        <p className="quiz-question">
          • Menciona qué animal o animales son los portadores de esta enfermedad (lleva el microorganismo que transmite la enfermedad)
        </p>
        <textarea
          name="q3"
          value={answers.q3}
          onChange={handleChange}
          className="line-textarea"
          rows={2}
        />
      </article>

      {/* 질문 4 (Orange) */}
      <article className="quiz-card orange-card">
        <p className="quiz-question">
          • Menciona al menos dos malestares o formas en las que se manifiesta esta enfermedad:
        </p>
        <div className="line-row">
          <span className="row-num">1.</span>
          <input
            type="text"
            name="q4_1"
            value={answers.q4_1}
            onChange={handleChange}
            className="line-input"
          />
        </div>
        <div className="line-row">
          <span className="row-num">2.</span>
          <input
            type="text"
            name="q4_2"
            value={answers.q4_2}
            onChange={handleChange}
            className="line-input"
          />
        </div>
      </article>

      {/* 질문 5 (Dark Grey/Slate) */}
      <article className="quiz-card dark-card">
        <p className="quiz-question">
          • Menciona al menos 3 formas con las que podemos prevenir la transmisión de esta enfermedad:
        </p>
        <div className="line-row">
          <span className="row-num">1.</span>
          <input
            type="text"
            name="q5_1"
            value={answers.q5_1}
            onChange={handleChange}
            className="line-input"
          />
        </div>
        <div className="line-row">
          <span className="row-num">2.</span>
          <input
            type="text"
            name="q5_2"
            value={answers.q5_2}
            onChange={handleChange}
            className="line-input"
          />
        </div>
        <div className="line-row">
          <span className="row-num">3.</span>
          <input
            type="text"
            name="q5_3"
            value={answers.q5_3}
            onChange={handleChange}
            className="line-input"
          />
        </div>
      </article>

      {/* 네비게이션 버튼 영역 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">5</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          CONTINUAR →
        </button>
      </div>
    </section>
  );
}

export default Page5;