import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerFarm🏕️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <mark>The site is under-construction..</mark>
        <h1 className={styles.title}>
          <a href="#">HackerFarm🏕️</a>
        </h1>

        <p className={styles.description}>
        An Internet 🌐 Camping Station for <br/><code>#BioHackers🧘🏻‍♂️ #Programmers👨🏻‍💻 #Dreamers😇 #Doers✌🏻</code>
        </p>

        <div className={styles.grid}>
          <a href="/intro" className={styles.card}>
          <h3>🙏🏻 Welcome Home &rarr;</h3>
            <p>What is HackerFarm and How I can be a part of this?</p>
            <p>Tell me what's going to happen!</p>
          </a>

          <a
            href="/life-at-farm"
            className={styles.card}
          >
            <h3>🌳 Life at Farm &rarr;</h3>
            <p>Amidst nature.. acquire skills, build projects and learn how to make money on internet.</p>
            {/* <p>Secure your livelihood from an idyllic location & escape the hamster wheel of urban life.</p> */}
            {/* <p>Participate, Build, Engage, Play. A chaos in the creative activities.</p> */}
          </a>

          <a href="/camps" className={styles.card}>
          <h3>⛺ Camps / Study Groups &rarr;</h3>
            <p>Learn about selfmusing and programming camps that happen on &amp; off the farm.</p>
          </a>

          <a
            href="/community"
            className={styles.card}
          >
            <h3>👥 Community &rarr;</h3>
            <p>
              A nomadic camping community, focussing on healthy and high-tech lifestyle! 
            </p>
          </a>

          <a href="/intro" className={styles.fullcard}>
          <h3>&larr; Hacker 👽 Labs &rarr;</h3>
            <p>We build conscious and ethical solutions for a better future.</p>
          </a>
        </div>

<button class="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-black rounded">
    Apply for Camp
</button>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://burningman.org/culture/philosophical-center/10-principles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired by &nbsp;"the 10 principles of{' '}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Burning-Man.svg/1200px-Burning-Man.svg.png" alt="Burningman" className={styles.logo} />"
         Burning Man.
        </a>
      </footer>
    </div>
  )
}
