import page4Img from '../images/Page5.png';
import '../css/App.css';
import '../css/Page4.css';

function Page4({ prevPage, nextPage }) {
  return (
    <section className="page-section">
      {/* 4페이지 이미지 */}
      <div className="page4-image-wrapper">
        <img 
          src={page4Img} 
          alt="Ciclo de transmisión y síntomas" 
          className="cover-image"
        />
      </div>

      {/* 네비게이션 버튼 영역 */}
      <div className="page-navigation">
        <button type="button" onClick={prevPage} className="nav-button secondary">
          ← ANTERIOR
        </button>
        <span className="page-number">4</span>
        <button type="button" onClick={nextPage} className="nav-button primary">
          CONTINUAR →
        </button>
      </div>
    </section>
  );
}

export default Page4;