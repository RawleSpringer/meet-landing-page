import { useState } from 'react';
import reactLogo from './assets/react.svg';
import logo from './assets/logo.svg';
import heroLeftImage from './assets/desktop/image-hero-left.png';
import heroRightImage from './assets/desktop/image-hero-right.png';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="" />
      </header>
      <section className={styles.hero}>
        <img src={heroLeftImage} alt="" />
        <div className={styles.heroCopy}>
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className={styles.heroButtons}>
            <button>Download v1.3</button>
            <button>What is it?</button>
          </div>
        </div>
        <img src={heroLeftImage} alt="" />
      </section>
    </div>
  );
}

export default App;
