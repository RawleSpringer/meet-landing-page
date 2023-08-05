<script>
  import '../app.css';
  import Logo from '../assets/logo.svelte';
  import imgHeroLeft from '../assets/desktop/image-hero-left.png';
  import imgHeroRight from '../assets/desktop/image-hero-right.png';
  import womanImgDesktop from '../assets/desktop/image-woman-in-videocall.jpg';
  import womenImgDesktop from '../assets/desktop/image-women-videochatting.jpg';
  import menImgDesktop from '../assets/desktop/image-men-in-meeting.jpg';
  import manImgDesktop from '../assets/desktop/image-man-texting.jpg';
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
    <section class="main-content">
      <div class="number-line" />
      <div class="number">01</div>
      <ul class="img-list">
        <li class="main-content-image">
          <img src={womanImgDesktop} alt="woman in videocall" />
        </li>
        <li class="main-content-image">
          <img src={womenImgDesktop} alt="women video chatting" />
        </li>
        <li class="main-content-image">
          <img src={menImgDesktop} alt="men in meeting" />
        </li>
        <li class="main-content-image">
          <img src={manImgDesktop} alt="man texting" />
        </li>
      </ul>

      <div class="main-content-copy">
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
    margin-bottom: 141px;
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
    margin-top: -40px;
  }

  .img-right {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: -40px;
    margin-top: 40px;
  }

  .main-content {
    padding-top: 32rem;
    position: relative;
    max-width: 111rem;
    margin-left: auto;
    margin-right: auto;
  }

  .number-line {
    border-left: solid hsl(240, 10%, 57%) 1px;
    height: 84px;
    width: 1px;
    position: absolute;
    left: 50%;
    top: 116px;
  }

  .number {
    position: absolute;
    border: hsl(240, 10%, 57%) 1px solid;
    border-radius: 50%;
    top: 200px;
    left: 47.6%;
    line-height: 56px;
    width: 56px;
    text-align: center;
    color: hsl(240, 10%, 57%);
  }

  .img-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 242px;
  }

  .main-content-image {
    height: 100%;
    width: 255px;
  }

  .main-content-image img {
    border-radius: 10px;
  }

  .main-content-copy {
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 80px;
  }

  .main-content-copy h2 {
    width: 445px;
    font-size: 4rem;
    line-height: 44px;
    color: hsl(240, 21%, 20%);
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .main-content-copy p:first-child {
    text-transform: uppercase;
    color: hsl(192, 37%, 48%);
    line-height: 26px;
    letter-spacing: 4px;
    font-weight: bold;
  }
</style>
