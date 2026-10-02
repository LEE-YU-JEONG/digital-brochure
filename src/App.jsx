import "./App.css";

const sections = [
  {
    id: "intro",
    label: "소개",
    title: "어떤 곳인가요?",
    description:
      "기관 또는 프로그램의 목적과 주요 내용을 소개하는 공간입니다. 기존 팜플렛의 소개 문구를 여기에 입력하세요.",
    image: "/images/cover.jpg",
  },
  {
    id: "program",
    label: "주요 안내",
    title: "주요 프로그램",
    description:
      "프로그램, 서비스, 행사 일정 등 방문자에게 필요한 정보를 간결하게 정리하세요.",
    image: "/images/program.jpg",
  },
  {
    id: "contact",
    label: "문의",
    title: "문의 및 연락처",
    description:
      "운영 시간, 주소, 전화번호, 이메일 등 필요한 연락 정보를 입력하세요.",
    image: "/images/contact.jpg",
  },
];

function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home">
          DIGITAL BROCHURE
        </a>
        <a className="top-link" href="#contact">
          문의하기
        </a>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-image"
          src="/images/cover.jpg"
          alt="팜플렛 대표 이미지"
        />
        <div className="hero-content">
          <p className="eyebrow">INFORMATION GUIDE</p>
          <h1>
            필요한 정보를
            <br />
            한눈에 확인하세요.
          </h1>
          <p className="hero-description">
            팜플렛의 주요 내용을 모바일에서 편리하게 확인할 수 있습니다.
          </p>
          <a className="primary-button" href="#intro">
            안내 내용 보기 ↓
          </a>
        </div>
      </section>

      <nav className="section-nav" aria-label="페이지 메뉴">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </nav>

      {sections.map((section, index) => (
        <section
          className={`info-section ${index % 2 ? "alternate" : ""}`}
          id={section.id}
          key={section.id}
        >
          <div className="info-image-wrap">
            <img
              className="info-image"
              src={section.image}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="info-copy">
            <p className="eyebrow">0{index + 1} / INFORMATION</p>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        </section>
      ))}

      <footer className="footer">
        <p className="footer-title">DIGITAL BROCHURE</p>
        <p>기관명 또는 프로그램명을 입력하세요.</p>
        <a href="#home">맨 위로 ↑</a>
        <small>© 기관명. 필요한 저작권 및 출처 정보를 입력하세요.</small>
      </footer>
    </main>
  );
}

export default App;