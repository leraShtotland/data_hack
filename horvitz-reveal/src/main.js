import './style.css';
import logoUrl from './assets/logo.svg';

document.querySelector('#app').innerHTML = `
  <main class="page">
    <header class="hero">
      <img class="hero__logo" src="${logoUrl}" alt="Horvitz Reveal logo" />
      <p class="hero__eyebrow">Introducing</p>
      <h1 class="hero__title">Horvitz Reveal</h1>
      <p class="hero__subtitle">
        Illuminate your launch narrative with real-time data stories that delight investors, press, and early adopters.
      </p>
      <div class="hero__actions">
        <a class="button button--primary" href="#waitlist">Join the waitlist</a>
        <a class="button button--ghost" href="#demo">Book a live demo</a>
      </div>
    </header>

    <section class="section" id="waitlist">
      <h2 class="section__title">Designed for bold storytelling</h2>
      <div class="grid">
        <article class="card">
          <h3>Dynamic reveal moments</h3>
          <p>Stage product unveilings with cinematic pacing, synchronized across every channel.</p>
        </article>
        <article class="card">
          <h3>Data-backed confidence</h3>
          <p>Surface launch metrics instantly so your team can react and iterate in real time.</p>
        </article>
        <article class="card">
          <h3>Collaborative newsroom</h3>
          <p>Give PR, product, and leadership teams a shared canvas for crafting the story.</p>
        </article>
      </div>
    </section>

    <section class="section section--accent" id="demo">
      <div class="section__content">
        <h2>Ready to orchestrate your most ambitious reveal yet?</h2>
        <p>
          Secure early access to Horvitz Reveal and partner with us on the future of interactive launch experiences.
        </p>
        <form class="form">
          <label class="form__label" for="email">Email</label>
          <div class="form__controls">
            <input class="form__input" type="email" id="email" name="email" placeholder="you@company.com" required />
            <button class="button button--primary" type="submit">Request invite</button>
          </div>
        </form>
      </div>
    </section>

    <footer class="footer">
      <p>© ${new Date().getFullYear()} Horvitz Reveal. All rights reserved.</p>
    </footer>
  </main>
`;
