<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gallery · GDS Lavori — I nostri lavori realizzati a Prato</title>
  <meta name="description" content="Sfoglia la galleria dei progetti realizzati da GDS Lavori: ristrutturazioni civili, restauri conservativi, decorazioni, impermeabilizzazioni e cappotti termici a Prato e provincia." />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%232f4862'/%3E%3Ctext x='16' y='22' font-family='Arial Black' font-size='14' font-weight='900' text-anchor='middle' fill='%23f5f3ee'%3EG%3C/text%3E%3C/svg%3E" />
  <link rel="stylesheet" href="assets/style.css" />
</head>
<body>

  <nav class="navbar">
    <div class="container nav-inner">
      <a href="index.html" class="brand">
        <div class="brand-mark">G</div>
        <div class="brand-text">
          <strong>GDS LAVORI</strong>
          <small>SRL · PRATO · IT</small>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="servizi.html">Servizi</a></li>
        <li><a href="about.html">Chi Siamo</a></li>
        <li><a href="gallery.html" class="active">Gallery</a></li>
        <li><a href="contatti.html" class="nav-cta">Preventivo <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a></li>
      </ul>
      <button class="nav-toggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ============ PAGE HEADER ============ -->
  <header class="page-header">
    <div class="container">
      <span class="eyebrow">I nostri lavori</span>
      <h1>Gallery<br>progetti.</h1>
      <p>Una selezione dei cantieri completati negli ultimi anni: ristrutturazioni, restauri, decorazioni e interventi industriali in tutta la provincia di Prato.</p>
      <nav class="breadcrumb">
        <a href="index.html">Home</a>
        <span>/</span>
        <span style="color: var(--white)">Gallery</span>
      </nav>
    </div>
  </header>

  <!-- ============ GALLERY ============ -->
  <section style="padding-top: 5rem;">
    <div class="container">
      <div class="gallery-filters" data-reveal>
        <button class="filter-btn active" data-filter="all">Tutti</button>
        <button class="filter-btn" data-filter="ristrutturazioni">Ristrutturazioni</button>
        <button class="filter-btn" data-filter="restauri">Restauri</button>
        <button class="filter-btn" data-filter="decorazioni">Decorazioni</button>
        <button class="filter-btn" data-filter="industriali">Industriali</button>
        <button class="filter-btn" data-filter="impermeabilizzazioni">Impermeabilizzazioni</button>
      </div>

      <div class="gallery-grid">
        <!-- Placeholder gallery items - sostituibili con immagini reali -->
        <div class="gallery-item wide" data-cat="ristrutturazioni" data-reveal>
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Ristrutturazione</span>
            <h4>Appartamento storico, centro Prato</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="restauri" data-reveal data-reveal-delay="1">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M2 22h20M6 18h12M8 14h8M10 10h4M12 2v8"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Restauro conservativo</span>
            <h4>Facciata palazzo d'epoca</h4>
          </div>
        </div>

        <div class="gallery-item tall" data-cat="decorazioni" data-reveal data-reveal-delay="2">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M19 3l-7 7M9 19l-3-3-3 3M21 8l-3-3-7 7 3 3 7-7z"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Stucchi veneziani</span>
            <h4>Villa privata, Montemurlo</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="industriali" data-reveal>
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M2 20h20M4 20V8l8-4 8 4v12M9 12h6M9 16h6"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Capannone industriale</span>
            <h4>Ristrutturazione capannone</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="ristrutturazioni" data-reveal data-reveal-delay="1">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M3 12l9-9 9 9M5 10v10h14V10"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Ristrutturazione integrale</span>
            <h4>Villa unifamiliare, Vaiano</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="impermeabilizzazioni" data-reveal data-reveal-delay="2">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Guaina liquida</span>
            <h4>Terrazza condominiale</h4>
          </div>
        </div>

        <div class="gallery-item tall" data-cat="decorazioni" data-reveal>
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M19 3l-7 7M9 19l-3-3-3 3M21 8l-3-3-7 7 3 3 7-7z"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Pitture decorative</span>
            <h4>Hotel boutique, centro storico</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="industriali" data-reveal data-reveal-delay="1">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M2 20h20M4 20V8l8-4 8 4v12M9 12h6M9 16h6"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Verniciatura industriale</span>
            <h4>Stabilimento tessile, Prato</h4>
          </div>
        </div>

        <div class="gallery-item wide" data-cat="ristrutturazioni" data-reveal data-reveal-delay="2">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Cappotto termico</span>
            <h4>Edificio multipiano, Carmignano</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="restauri" data-reveal>
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M2 22h20M6 18h12M8 14h8M10 10h4M12 2v8"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Restauro affreschi</span>
            <h4>Chiesa parrocchiale, Prato</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="impermeabilizzazioni" data-reveal data-reveal-delay="1">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Impermeabilizzazione</span>
            <h4>Copertura industriale</h4>
          </div>
        </div>

        <div class="gallery-item" data-cat="decorazioni" data-reveal data-reveal-delay="2">
          <div class="gallery-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M19 3l-7 7M9 19l-3-3-3 3M21 8l-3-3-7 7 3 3 7-7z"/>
            </svg>
          </div>
          <div class="gallery-overlay">
            <span class="cat">// Tinteggiatura</span>
            <h4>Appartamento moderno, Prato Nord</h4>
          </div>
        </div>

      </div>

      <div style="margin-top: 4rem; padding: 2rem; background: var(--concrete); border-left: 3px solid var(--orange);" data-reveal>
        <p style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--gray-dark); line-height: 1.7;">
          <strong style="color: var(--petrolio);">// NOTA</strong> &mdash; Le immagini mostrate sono placeholder dimostrativi. Le foto reali dei cantieri saranno caricate prossimamente. Per visualizzare il portfolio completo dei nostri lavori, contattaci direttamente.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ FINAL CTA ============ -->
  <section class="final-cta">
    <div class="container">
      <div data-reveal>
        <h2>Il prossimo progetto<br>potrebbe essere il tuo.</h2>
        <p>Contattaci per una consulenza gratuita. Trasformiamo le tue idee in opere concrete e durature.</p>
        <a href="contatti.html" class="btn btn-primary">
          Inizia ora
          <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- ============ FOOTER ============ -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <div class="brand-mark">G</div>
            <div class="brand-text">
              <strong>GDS LAVORI</strong>
              <small>SRL · PRATO · IT</small>
            </div>
          </div>
          <p>Azienda edile di Prato specializzata in ristrutturazioni civili e industriali, decorazioni, impermeabilizzazioni e coibentazioni. Costruiamo solidità dal primo mattone.</p>
        </div>
        <div class="footer-col">
          <h5>Naviga</h5>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="servizi.html">Servizi</a></li>
            <li><a href="about.html">Chi siamo</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contatti.html">Contatti</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Servizi</h5>
          <ul>
            <li><a href="servizi.html">Ristrutturazioni</a></li>
            <li><a href="servizi.html">Decorazioni</a></li>
            <li><a href="servizi.html">Impermeabilizzazioni</a></li>
            <li><a href="servizi.html">Coibentazioni</a></li>
            <li><a href="servizi.html">Pratiche tecniche</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Contatti</h5>
          <div class="footer-contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>59100 Prato, Tuscany — IT</span>
          </div>
          <div class="footer-contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7a2 2 0 011.72 2.03z"/></svg>
            <span>+39 347 9053103</span>
          </div>
          <div class="footer-contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7a2 2 0 011.72 2.03z"/></svg>
            <span>0574 202295</span>
          </div>
          <div class="footer-contact-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            <a href="mailto:mario@gdslavori.it">mario@gdslavori.it</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span data-year></span> GDS Lavori SRL — All rights reserved</span>
        <span>P.IVA · 59100 Prato · Tuscany · Italy</span>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/393479053103?text=Salve%2C%20vorrei%20informazioni%20su%20un%20intervento." class="whatsapp-fab" target="_blank" rel="noopener" aria-label="Contattaci su WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>

  <script src="assets/script.js"></script>
</body>
</html>
