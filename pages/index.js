import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { useState } from "react"

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false)
  function cardFilpHandlers() {
    setIsFlipped((prevState) => !prevState)
  }

  return (
    <div className="center-content">
      <Head>
        <title>NFT preview card component</title>
        <meta
          name="description"
          content="This HTML and CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="center-content">
        <div onClick={cardFilpHandlers} className={styles.card}>
          {!isFlipped && (
            <div>
              <Image
                src="/image-equilibrium.jpg"
                width="280px"
                height="280px"
                className="round-corner"
              />
              <div>
                <h1>Equilibrium #3429</h1>
                <p> Our Equilibrium collection promotes balance and calm.</p>
                <div className="content-space-between">
                  <div className={styles.value}>
                    <svg
                      width="11"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                        fill="#00FFF8"
                      />
                    </svg>
                    <span>0.041 ETH</span>
                  </div>
                  <div>
                    <svg
                      width="17"
                      height="17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                        fill="#8BACD9"
                      />
                    </svg>
                    <span>3 days left</span>
                  </div>
                </div>
                <hr />
                <div className="align-center">
                  <Image
                    src="/image-avatar.png"
                    width="25px"
                    height="25px"
                    className="white-border"
                  />
                  <span>
                    Creation of{" "}
                    <span className="text-white"> Jules Wyvern</span>
                  </span>
                </div>
              </div>
            </div>
          )}
          {isFlipped && (
            <div className="text-center">
              Challenge by Frontend Mentor. Coded by
              <span className="text-white"> Rene Balog-Dutombe</span>.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
