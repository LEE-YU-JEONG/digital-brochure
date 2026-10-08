import React from 'react';
import '../css/App.css';
import '../css/Page7.css';

import logoLeft from '../images/logo-left.png';
import logoRight from '../images/logo-right.png';
import page7bottom from '../images/page7bottom.png';
import QRchikungunya from '../images/qr-chikungunya.png';
import QRDengue from '../images/qr-Dengue.png';
import QRfaq from '../images/qr-faq.png';

function Page7({ prevPage, resetPage }) {
  return (
    <section className="page-section page-7">
      {/* 상단 양끝 로고 헤더 */}
      <header className="page7-header">
        <div className="top-logo-group">
          <img src={logoLeft} alt="Centro de Competencia OH TARGET - USFX" className="header-logo logo-left" />
          <img src={logoRight} alt="One Health TARGET" className="header-logo logo-right" />
        </div>
      </header>

      {/* QR 코드 카드 영역 */}
      <article className="info-card">
        <div className="info-badge">Más Información:</div>
        
        <div className="qr-container">
          <div className="qr-item">
            <span className="qr-title">Guía Chikungunya</span>
            <img src={QRchikungunya} alt="QR Chikungunya" className="qr-img" />
          </div>
          <div className="qr-item">
            <span className="qr-title">Guía Dengue</span>
            <img src={QRDengue} alt="QR Dengue" className="qr-img" />
          </div>
          <div className="qr-item">
            <span className="qr-title">Preguntas frecuentes</span>
            <img src={QRfaq} alt="QR FAQ" className="qr-img" />
          </div>
        </div>
      </article>

      {/* 설명 박스 */}
      <div className="description-box">
        <p>
          Material educativo adaptado a partir de contenidos desarrollados en el marco del<br/>
          <strong>Proyecto KAP Wildlife – Bolivia:</strong><br/>
          Conocimientos, Actitudes y Prácticas (CAP), frente al riesgo de enfermedades zoonóticas, comercio y consumo de vida silvestre en América Latina. Presto, Chuquisaca, Bolivia, 2024.
        </p>
      </div>

      {/* 하단 메인 이미지 영역 */}
      <div className="bottom-illustration-wrapper">
        <img src={page7bottom} alt="Una Salud, un compromiso de todas y todos" className="bottom-art-img" />
      </div>

      {/* 하단 네비게이션 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">7</span>
        <button type="button" onClick={resetPage} className="nav-button primary">
          INICIO ↻
        </button>
      </div>
    </section>
  );
}

export default Page7;