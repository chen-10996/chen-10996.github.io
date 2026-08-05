const themes = [
  {
    number: "01",
    title: "Built environments and climate exposure",
    text: "How urban form, land cover, and green infrastructure shape exposure to heat, air pollution, noise, and other environmental stressors.",
    tags: ["Urban heat", "Green infrastructure", "Spatial patterns"],
  },
  {
    number: "02",
    title: "Environmental pathways to health",
    text: "How climate-related exposures interact with built-environment features to influence respiratory and mental health across racialized communities.",
    tags: ["Environmental health", "Asthma", "Mental distress"],
  },
  {
    number: "03",
    title: "Equitable climate adaptation",
    text: "How plans, investments, and public processes can reduce unequal climate burdens and expand access to protection and adaptation resources.",
    tags: ["Climate justice", "Plan evaluation", "Public participation"],
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

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Peng Chen - home">
          <span className="wordmark-mark">PC</span>
          <span className="wordmark-name">Peng Chen</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cv" href="/Peng-Chen-CV.docx" download>
          CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Urban environmental planning · Climate · Health · Equity</p>
            <h1 id="hero-title">Peng Chen</h1>
            <p className="hero-statement">
              I study how the built environment shapes climate-related exposures and public
              health - and how planning can distribute protection and adaptation resources
              more equitably.
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
            </div>
          </div>

          <figure className="hero-portrait">
            <img
              src="/media/peng-chen-portrait-bw.png"
              alt="Peng Chen standing in a library at Knowlton Hall"
            />
            <figcaption>
              <span>Planning for healthier, more climate-resilient cities.</span>
              <span className="portrait-index">01 / 03</span>
            </figcaption>
          </figure>
        </section>

        <section className="research" id="research" aria-labelledby="research-title">
          <div className="section-intro">
            <p className="section-label">Research agenda</p>
            <div>
              <h2 id="research-title">From exposure to action.</h2>
              <p>
                My work follows a connected urban system: the places we build shape
                environmental exposure; exposure shapes health; and planning determines who
                receives protection.
              </p>
            </div>
          </div>

          <div className="research-flow" aria-hidden="true">
            <span>Built environment</span>
            <i>→</i>
            <span>Climate exposure</span>
            <i>→</i>
            <span>Public health</span>
            <i>→</i>
            <span>Equitable planning</span>
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
              Spatial evidence, systems models, and plan evaluation reveal where climate
              adaptation works - and who it may leave behind.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature feature-wide">
              <figure>
                <img
                  src="/media/heat-plan-types.png"
                  alt="Radar charts comparing overall and equity-specific heat adaptation scores across seven municipal plan types"
                />
              </figure>
              <div className="feature-copy">
                <span className="feature-kicker">Planning systems · 2026</span>
                <h3>Equity remains peripheral in municipal heat planning.</h3>
                <p>
                  Across 199 plans in 30 U.S. cities, equity was especially limited in goal
                  setting, public participation, and uncertainty management.
                </p>
                <a href="https://doi.org/10.1080/01944363.2026.2695381" target="_blank" rel="noreferrer">
                  Read the study <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="feature">
              <figure>
                <img
                  src="/media/asthma-pathways.png"
                  alt="Path model linking built environment, temperature, air pollution, and adult asthma emergency department visits"
                />
              </figure>
              <div className="feature-copy">
                <span className="feature-kicker">Respiratory health · 2025</span>
                <h3>Not all green space follows the same health pathway.</h3>
                <p>
                  Trees and water were associated with fewer asthma emergency visits, while
                  grass followed different patterns across racialized neighborhoods.
                </p>
                <a href="https://doi.org/10.1016/j.landurbplan.2025.105320" target="_blank" rel="noreferrer">
                  Read the study <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <article className="feature feature-accent">
              <figure>
                <img
                  src="/media/mental-distress-effects.png"
                  alt="Non-linear associations between urban green space, environmental stressors, and adult frequent mental distress by racial group"
                />
              </figure>
              <div className="feature-copy">
                <span className="feature-kicker">Mental health · 2026</span>
                <h3>Greening benefits are non-linear and unevenly distributed.</h3>
                <p>
                  Tree canopy showed stronger mental-health benefits in communities of color,
                  challenging universal, one-size-fits-all greening strategies.
                </p>
                <a href="https://doi.org/10.1016/j.landurbplan.2026.105598" target="_blank" rel="noreferrer">
                  Read the study <span aria-hidden="true">↗</span>
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
            <a className="text-link" href="/Peng-Chen-CV.docx" download>
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
            <h2 id="about-title">Planning cities that protect everyone.</h2>
            <p className="about-lead">
              Peng Chen is an urban environmental planning scholar and incoming Wilkes
              Postdoctoral Fellow at the University of Utah. He earned his Ph.D. in City and
              Regional Planning from The Ohio State University.
            </p>
            <p>
              His research examines how urban form and green infrastructure shape exposure to
              extreme heat, air pollution, and noise; how these environmental pathways affect
              respiratory and mental health; and how plans and investments can better serve
              communities historically burdened by climate hazards.
            </p>
            <p>
              Combining geospatial analysis, spatial statistics, machine learning, plan
              evaluation, surveys, and qualitative methods, Chen translates complex
              relationships among place, climate, and health into practical strategies for
              equitable adaptation.
            </p>

            <div className="about-facts">
              <div>
                <span>Methods</span>
                <p>Geospatial analysis · Spatial statistics · Machine learning · Mixed methods</p>
              </div>
              <div>
                <span>Teaching</span>
                <p>Site planning · Digital design and analysis · Plan-making studios</p>
              </div>
              <div>
                <span>Recognition</span>
                <p>Wilkes Postdoctoral Fellowship · OSU Presidential Fellowship · Best Dissertation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-label">Contact</p>
          <h2 id="contact-title">Let&apos;s talk about climate, health, and cities.</h2>
          <p>
            I welcome conversations about research collaboration, teaching, public scholarship,
            and equitable climate adaptation.
          </p>
          <a className="contact-email" href="mailto:chen.10996@osu.edu">
            chen.10996@osu.edu <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <div>
          <strong>Peng Chen</strong>
          <span>Urban environmental planning scholar</span>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top ↑</a>
          <a href="/Peng-Chen-CV.docx" download>Download CV</a>
        </div>
        <span>© 2026 Peng Chen</span>
      </footer>
    </div>
  );
}
