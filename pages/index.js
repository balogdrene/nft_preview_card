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
              <div className={styles.image_container}>
                <Image
                  alt=""
                  src="/image-equilibrium.jpg"
                  width="280px"
                  height="280px"
                  className="round-corner"
                />
                <div className={styles.image_overlay}>
                  <svg
                    width="48"
                    height="48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h48v48H0z" />
                      <path
                        d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                        fill="#FFF"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <h1 className={styles.title}>Equilibrium #3429</h1>
                <p> Our Equilibrium collection promotes balance and calm.</p>
                <div className="content-space-between">
                  <div className="align-center">
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
                    <div className={styles.value}>
                      <span>0.041 ETH</span>
                    </div>
                  </div>
                  <div className="align-center">
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
                    <div>
                      <span>3 days left</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="align-center">
                  <Image
                    alt=""
                    src="/image-avatar.png"
                    width="25px"
                    height="25px"
                    className="white-border"
                  />
                  <span>
                    Creation of{" "}
                    <span className={styles.name}> Jules Wyvern</span>
                  </span>
                </div>
              </div>
            </div>
          )}
          {isFlipped && (
            <div className="text-center">
              Challenge by Frontend Mentor. Coded by
              <span className={styles.name}> Rene Balog-Dutombe</span>.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
