const themes = [
  {
    number: "01",
    title: "Built environments and climate exposure",
    text: "How the spatial and physical characteristics of built environments are associated with exposure to climate hazards and environmental stressors—and how these relationships vary across places and populations.",
    tags: ["Climate exposure", "Urban green space", "Spatial characteristics"],
  },
  {
    number: "02",
    title: "Environmental exposure and public health",
    text: "How built-environment conditions and climate-related exposures are associated with physical and mental health, including variation across sociodemographic groups.",
    tags: ["Environmental health", "Climate and health", "Health equity"],
  },
  {
    number: "03",
    title: "Equitable environmental and climate adaptation planning",
    text: "How urban environmental planning can make protection from climate hazards and access to adaptation resources more equitable across sociodemographic groups.",
    tags: ["Environmental justice", "Climate adaptation", "Planning equity"],
  },
];

const publications = [
  {
    year: "2026",
    journal: "Journal of the American Planning Association",
    title:
      "Assessing Equity in Urban Heat Adaptation: A Review of Networks of Plans in U.S. Municipalities",
    authors: "Peng Chen & Maria Manta Conroy",
    note: "Evaluates 199 plans across the 30 largest U.S. cities and identifies persistent gaps in equity integration, coordination, and public participation.",
    href: "https://doi.org/10.1080/01944363.2026.2695381",
  },
  {
    year: "2026",
    journal: "Landscape and Urban Planning",
    title:
      "Nexus between urban green space and adult frequent mental distress: Differentiated non-linear environmental pathways and racial heterogeneity",
    authors: "Peng Chen, Desheng Liu & Huicong Han",
    note: "Traces how trees and grass relate differently to mental distress through heat, air pollution, and noise - with unequal benefits across communities.",
    href: "https://doi.org/10.1016/j.landurbplan.2026.105598",
  },
  {
    year: "2025",
    journal: "Landscape and Urban Planning",
    title:
      "Urban green space, respiratory health and rising temperatures: Adult asthma across racialized neighborhoods in Los Angeles County",
    authors: "Peng Chen & Bernadette Hanlon",
    note: "Shows that trees, water, and grass follow distinct pathways to asthma-related emergency visits through temperature and air pollution.",
    href: "https://doi.org/10.1016/j.landurbplan.2025.105320",
  },
  {
    year: "2024",
    journal: "Urban Climate",
    title:
      "Inequality in heat: The role of spatial patterns of urban green infrastructure",
    authors: "Peng Chen",
    note: "Demonstrates that green-infrastructure quantity and configuration jointly shape urban heat exposure and its unequal distribution.",
    href: "https://doi.org/10.1016/j.uclim.2024.101820",
  },
  {
    year: "2024",
    journal: "Environment and Planning B: Urban Analytics and City Science",
    title:
      "Gravity-based models for evaluating urban park accessibility: Why localized attractiveness factors and travel modes matter",
    authors: "Peng Chen, Wei Wang, Chong Qian, Mengqiu Cao & Tianren Yang",
    note: "Develops a locally informed, multimodal measure that reveals accessibility gaps obscured by conventional park-access models.",
    href: "https://doi.org/10.1177/23998083231206168",
  },
];

const earlierPublications = [
  "Chen, P., Qian, C., & Jin, Y. F. (2021). The differences between square pools and curved pools: A comparative study on the aesthetic appreciation of Jiangnan gardens in the late Ming Dynasty.",
  "Liu, B., & Chen, P. (2020). Research on evaluation and optimization of features of rural landscape based on the science of human settlements.",
  "Liu, B., Chen, P., & Shao, Y. (2019). Industry development and landscape evolution in the rural area.",
];

const planDimensions = [
  ["A", "Goals"],
  ["B", "Fact Base"],
  ["C", "Strategy Identification"],
  ["D", "Implementation and Monitoring"],
  ["E", "Coordination"],
  ["F", "Public Participation"],
  ["G", "Uncertainty"],
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Peng Chen - home">
          <span className="wordmark-mark">PC</span>
          <span className="wordmark-name">Peng Chen</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </details>
        <a className="header-cv" href="/Peng-Chen-CV.pdf" download>
          CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Urban Environments · Climate Adaptation · Environmental Health · Environmental Justice</p>
            <h1 id="hero-title">
              <span>Peng Chen</span>
              <span className="hero-name-chinese" lang="zh-Hans">陈鹏</span>
            </h1>
            <p className="hero-statement">
              My research examines interactions among built environments, climate-related
              exposures, and public health, with a focus on equitable environmental and
              climate adaptation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore my research <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-secondary" href="mailto:chen.10996@osu.edu">
                Get in touch
              </a>
            </div>
            <div className="hero-meta" aria-label="Current academic information">
              <div>
                <span className="meta-label">Beginning 2026</span>
                <strong>Wilkes Postdoctoral Fellow</strong>
                <span>University of Utah</span>
              </div>
              <div>
                <span className="meta-label">Ph.D. 2026</span>
                <strong>City & Regional Planning</strong>
                <span>The Ohio State University</span>
              </div>
              <div>
                <span className="meta-label">M.E. 2021 · B.E. 2018</span>
                <strong>Landscape Architecture</strong>
                <span>Tongji University</span>
              </div>
            </div>
          </div>

          <figure className="hero-portrait">
            <img
              src="/media/peng-chen-portrait-bw.png"
              alt="Peng Chen standing in a library at Knowlton Hall"
            />
            <figcaption>
              <span>Planning for more resilient, sustainable, and inclusive urban futures.</span>
              <span className="portrait-index">01 / 03</span>
            </figcaption>
          </figure>
        </section>

        <section className="research" id="research" aria-labelledby="research-title">
          <div className="section-intro">
            <p className="section-label">Research agenda</p>
            <div>
              <h2 id="research-title">From exposure to action.</h2>
            </div>
          </div>

          <div className="theme-grid">
            {themes.map((theme) => (
              <article className="theme-card" key={theme.number}>
                <span className="theme-number">{theme.number}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
                <ul aria-label={`${theme.title} topics`}>
                  {theme.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-work" aria-labelledby="featured-title">
          <div className="section-heading-row">
            <div>
              <p className="section-label">Selected work</p>
              <h2 id="featured-title">Research in view</h2>
            </div>
            <p>
              Through geospatial analysis, spatial modeling, and plan evaluation, these
              studies examine variation in environmental exposure, health, and adaptation
              planning across places and populations.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature feature-wide">
              <div className="feature-visual-stack">
                <figure className="heat-city-figure">
                  <div className="heat-city-frame">
                    <img
                      src="/media/heat-plan-cities.png"
                      alt="Overall and equity-specific heat adaptation plan quality scores across 30 U.S. cities"
                    />
                  </div>
                  <div className="plan-dimension-key">
                    <p>Planning dimensions</p>
                    <ul>
                      {planDimensions.map(([letter, label]) => (
                        <li key={letter}>
                          <strong>{letter}</strong>
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <figcaption>Plan quality and equity scores vary substantially across cities.</figcaption>
                </figure>
              </div>
              <div className="feature-copy">
                <span className="feature-kicker">Networks of Plans · 2026</span>
                <h3>Equity remains peripheral in municipal heat planning.</h3>
                <p>
                  Across 199 plans in 30 U.S. cities, the study finds that equity is rarely
                  integrated systematically into heat adaptation, particularly in goals,
                  public participation, and uncertainty management. The quality of heat
                  adaptation and equity integration also varies substantially across cities.
                </p>
                <a href="https://doi.org/10.1080/01944363.2026.2695381" target="_blank" rel="noreferrer">
                  Read full article <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="feature">
              <figure>
                <img
                  src="/media/mental-distress-effects.png"
                  alt="Non-linear associations between urban green space, environmental stressors, and adult frequent mental distress by racial group"
                />
              </figure>
              <div className="feature-copy">
                <span className="feature-kicker">UGS & Mental Health · 2026</span>
                <h3>Non-linear relationships reveal where—and for whom—urban greening may matter most.</h3>
                <p>
                  Using non-linear spatial models and simulated greening scenarios, the study
                  shows that estimated environmental and mental-health outcomes vary by
                  green-space type, intervention scale, and racial context. Tree-canopy
                  expansion was associated with lower frequent mental distress in communities
                  of color; grass conversion was not.
                </p>
                <a href="https://doi.org/10.1016/j.landurbplan.2026.105598" target="_blank" rel="noreferrer">
                  Read full article <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="feature feature-accent">
              <figure>
                <img
                  src="/media/asthma-pathways.png"
                  alt="Path model linking built environment, temperature, air pollution, and adult asthma emergency department visits"
                />
              </figure>
              <div className="feature-copy">
                <span className="feature-kicker">UGS & Respiratory Health · 2025</span>
                <h3>Different types of urban green space follow different respiratory-health pathways.</h3>
                <p>
                  Trees and water were associated with fewer asthma emergency visits, while
                  grass followed different patterns across racialized neighborhoods.
                </p>
                <a href="https://doi.org/10.1016/j.landurbplan.2025.105320" target="_blank" rel="noreferrer">
                  Read full article <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
          <p className="figure-note">
            Figures reproduced from the linked publications; see each article for full methods,
            results, and licensing information.
          </p>
        </section>

        <section className="publications" id="publications" aria-labelledby="publications-title">
          <div className="section-heading-row publications-heading">
            <div>
              <p className="section-label">Publications</p>
              <h2 id="publications-title">Selected writing</h2>
            </div>
            <a className="text-link" href="/Peng-Chen-CV.pdf" download>
              Full CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication" key={publication.title}>
                <span className="publication-year">{publication.year}</span>
                <div className="publication-main">
                  <span className="publication-journal">{publication.journal}</span>
                  <h3>{publication.title}</h3>
                  <p className="publication-authors">{publication.authors}</p>
                  <p className="publication-note">{publication.note}</p>
                </div>
                <a
                  className="publication-link"
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${publication.title}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>

          <details className="earlier-work">
            <summary>Earlier publications</summary>
            <ol>
              {earlierPublications.map((publication) => (
                <li key={publication}>{publication}</li>
              ))}
            </ol>
          </details>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <figure className="about-portrait">
            <img
              src="/media/peng-chen-portrait-color.jpg"
              alt="Portrait of Peng Chen outdoors against a sunlit concrete wall"
            />
          </figure>

          <div className="about-copy">
            <p className="section-label">About</p>
            <h2 id="about-title">Connecting urban environments, climate, and health.</h2>
            <p className="about-lead">
              Peng Chen is an urban environmental scholar and incoming Wilkes Postdoctoral
              Fellow at the University of Utah. He earned a Ph.D. in City and Regional
              Planning from The Ohio State University and M.E. and B.E. degrees in Landscape
              Architecture from Tongji University.
            </p>
            <p>
              His research examines interactions among built environments, climate-related
              exposures, and public health. He also studies how urban environmental planning
              can make protection from climate hazards and access to adaptation resources more
              equitable across sociodemographic groups.
            </p>
            <p>
              Drawing on geospatial data science, statistical and spatial modeling, plan
              evaluation, surveys, and interviews, Chen connects environmental evidence with
              planning practice to support more resilient, sustainable, and inclusive urban
              futures.
            </p>

            <div className="about-facts">
              <div>
                <span>Methods</span>
                <p>Geospatial data science · Statistical and spatial modeling · Plan evaluation and content analysis · Survey research · Interviews</p>
              </div>
              <div>
                <span>Teaching</span>
                <p>Site Planning and Development · Digital Design and Analysis · Plan Making Studio · City History and Law · Principles of Landscape Planning and Design · Principles of Landscape Planning</p>
              </div>
              <div>
                <span>Recognition</span>
                <p>Wilkes Postdoctoral Fellowship · OSU Presidential Fellowship · Patricia Burgess Award for Best Dissertation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-label">Contact</p>
          <h2 id="contact-title">Let&apos;s talk about cities, climate, environment, and health.</h2>
          <p>
            I welcome conversations about research collaboration, teaching, and environmental
            and climate adaptation planning.
          </p>
          <a className="contact-email" href="mailto:chen.10996@osu.edu">
            chen.10996@osu.edu <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <div>
          <strong>Peng Chen</strong>
          <span>Urban environmental scholar</span>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href="/Peng-Chen-CV.pdf" download>Download CV</a>
        </div>
        <span>© 2026 Peng Chen</span>
      </footer>
    </div>
  );
}
