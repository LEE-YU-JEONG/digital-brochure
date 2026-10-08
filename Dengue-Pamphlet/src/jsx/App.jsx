import { useState } from 'react';
import "../css/App.css";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import coverImg from '../images/Cover.png';

function App() {
  // 현재 페이지 번호 상태 (0: Cover, 1: Page 1, 2: Page 2, 3: Page 3, 4: Page 4)
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const resetPage = () => setCurrentPage(0);

  return (
    <main className="brochure">

      {/* COVER */}
      {currentPage === 0 && (
        <section className="cover-section">
          <img
            src={coverImg}
            alt="Guía para trabajo en escuelas - Dengue"
            className="cover-image"
          />

          <button type="button" onClick={nextPage} className="nav-button main-button">
            CONTINUAR ↓
          </button>
        </section>
      )}

      {/* PAGE 1 */}
      {currentPage === 1 && (
        <Page1 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 2 */}
      {currentPage === 2 && (
        <Page2 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 3 (nextPage 추가) */}
      {currentPage === 3 && (
        <Page3 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 4 */}
      {currentPage === 4 && (
        <Page4 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 5 */}
      {currentPage === 5 && (
        <Page5 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 6 */}
      {currentPage === 6 && (
        <Page6 prevPage={prevPage} nextPage={nextPage} />
      )}

      {/* PAGE 7 */}
      {currentPage === 7 && (
        <Page7 prevPage={prevPage} resetPage={resetPage} />
      )}

    </main>
  );
}

export default App;