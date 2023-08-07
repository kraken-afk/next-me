import { Inter } from 'next/font/google'
import Head from 'next/head'
import styles from "~/styles/home.module.css";
import Badge from '~/components/badge';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000" />
        <title>nv &bull; home</title>
        <link rel="icon" type="image/jpg" href="/profile.jpg" />
      </Head>
      <main className={inter.className}>
        <div className="mb-3">
          <Badge badgeType="warn">
            Hi, currenly im looking for a remote internship/junior role, if you
            interested to hire me, don't hesitate to reach me.
          </Badge>
        </div>
        <section>
          <p className={styles.description + " mb-4"}>
            Hi there, I'm{" "}
            <span className={styles.highlight}>Romeo noveanre</span>. I'm a 18
            years and im from Indonesia, i've been doing code since{" "}
            <span className={styles.highlight}> early 2020.</span> I used to
            code with <span className={styles.highlight}>front-end</span>, but i
            do <span className={styles.highlight}>back-end</span> also.
          </p>
          <p className={styles.description + " mb-4"}>
            Graduated from vocational school with CS major. as well with
            informal education at{" "}
            <a
              className={
                styles.highlight +
                " underline underline-offset-4 hover:outline-dotted outline-1"
              }
              href="https://dicoding.id"
            >
              Dicoding academy
            </a>
            , with several classes including{" "}
            <a
              className={
                styles.highlight +
                " underline underline-offset-4 hover:outline-dotted outline-1"
              }
              href="https://dicoding.com/certificates/4EXG93W9QZRL"
            >
              Front-end Expert Class
            </a>
            ,{" "}
            <a
              className={
                styles.highlight +
                " underline underline-offset-4 hover:outline-dotted outline-1"
              }
              href="https://dicoding.com/certificates/ERZRG9LEQPYV"
            >
              AWS practitioner
            </a>
            , and{" "}
            <a
              className={
                styles.highlight +
                " underline underline-offset-4 hover:outline-dotted outline-1"
              }
              href="https://dicoding.com/users/romeo_noveanre_mslu"
            >
              more.
            </a>
          </p>
          <p className={styles.description}>
            Currently im building{" "}
            <span className={styles.highlight}>Spotify UI clone</span>, learn{" "}
            <span className={styles.highlight}>Rust</span>, and try to get deep
            understanding of{" "}
            <span className={styles.highlight}>Js ecosystem.</span>
          </p>
        </section>
      </main>
    </>
  );
}
