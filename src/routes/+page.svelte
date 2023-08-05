<script>
  import '../app.css';
  import Logo from '../assets/logo.svelte';
  import imgHeroLeft from '../assets/desktop/image-hero-left.png';
  import imgHeroRight from '../assets/desktop/image-hero-right.png';
</script>

<div class="container">
  <header>
    <Logo />
  </header>
  <main>
    <section class="hero">
      <img class="img-left" src={imgHeroLeft} alt="" />
      <div class="hero-content">
        <h1>Group Chat For Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div class="cta">
          <button>Download <span>v1.3</span></button>
          <button>What is it?</button>
        </div>
      </div>
      <img class="img-right" src={imgHeroRight} alt="" />
    </section>
    <section>
      <ul>
        <li>1</li>
      </ul>

      <div>
        <p>Built for modern use</p>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  </main>
  <footer>
    <p>Experience more together</p>
    <p>
      Stay connected with reliable HD meetings and unlimited one-on-one and
      group video sessions.
    </p>
    <button>Download v1.3</button>
  </footer>
</div>

<style>
  header {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }

  .hero {
    display: flex;
    justify-content: center;
    position: relative;
    overflow-x: clip;
  }

  .hero-content {
    max-width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 6.4rem;
    line-height: 64px;
    color: hsl(240, 21%, 20%);
    margin-bottom: 34px;
    width: 445px;
  }

  .cta {
    margin-top: 34px;
  }

  .cta button:first-child {
    background-color: hsl(192, 37%, 48%);
    color: hsl(0, 0%, 98%);
    border: none;
    padding: 16px 29px;
    border-radius: 30px;
    margin-right: 16px;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .cta button:last-child {
    background-color: hsl(268, 34%, 53%);
    color: hsl(0, 0%, 98%);
    border: none;
    padding: 16px 29px;
    border-radius: 30px;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .cta span {
    color: hsl(192, 90%, 77%);
  }

  .img-left {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -40px;
  }

  .img-right {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -40px;
    margin-top: 40px;
  }
</style>
