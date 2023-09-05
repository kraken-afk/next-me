import { Inter } from "next/font/google";
import { myAge } from "~/utils";

import classNames from "classnames";
import Image from "next/image";
import Head from "next/head";
import styles from "~/styles/home.module.css";
import Badge from "~/components/badge";
import Footer from "~/components/footer";
import ProjectCard from "~/components/project-card";
import {
  pinnedReposQueryBuilder,
  type pinnedReposType,
} from "~/queries/pinnedRepos.query";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  repos: pinnedReposType;
}

export default function Home({ repos }: HomeProps) {
  const cn = classNames;
  const skill_list: string[] = [
    "typescript",
    "next",
    "react",
    "deno",
    "nodejs",
    "tailwind",
    "babel",
    "vite",
    "graphql",
    "git",
    "github",
    "lit",
    "sass",
  ];

  return (
    <>
      <Head>
        <title>nv • home</title>
        <meta name="title" content="nv • home" />
        <meta name="description" content="Frontend enthusiast." />
        <link rel="icon" type="image/jpg" href="/profile.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nv-me.vercel.app/" />
        <meta property="og:title" content="nv • home" />
        <meta property="og:description" content="Frontend enthusiast." />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zJlDKL3DmgD7hWWcL_4NQI9soFdrhRiZ26F6w1oPY512-mFhJ0nfGTSsNdcppycASYzCEpjOCC_tPMyS7ILSYcVrIg2Q=w1366-h661"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nv-me.vercel.app/" />
        <meta property="twitter:title" content="nv • home" />
        <meta property="twitter:description" content="Frontend enthusiast." />
        <meta
          property="twitter:image"
          content="https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zJlDKL3DmgD7hWWcL_4NQI9soFdrhRiZ26F6w1oPY512-mFhJ0nfGTSsNdcppycASYzCEpjOCC_tPMyS7ILSYcVrIg2Q=w1366-h661"
        />
        <meta
          data-rh="true"
          name="twitter:image:alt"
          content="Romeo Noeanre profile website"
        />
        <meta data-rh="true" name="twitter:image:width" content="1366" />
        <meta data-rh="true" name="twitter:image:height" content="661" />
        <meta name="twitter:site" content="@trshppl" />
        <meta name="twitter:creator" content="@trshppl" />
        <meta name="twitter:creator:id" content="@trshppl" />
      </Head>
      <main className={inter.className}>
        <div className="mb-3">
          <Badge badgeType="warn">
            Hi, currently im looking for a remote internship/junior role, if you
            interested to hire me, don't hesitate to reach me.
          </Badge>
        </div>
        <section className="mt-6">
          <span className="inline-block text-lg mb-2" id="about">
            <span className="text-xl text-zinc-700">#</span> About me
          </span>
          <p className={cn(styles.description, "mb-4")}>
            Hi there, I'm{" "}
            <span className={styles.highlight}>Romeo noveanre</span>. I'm{" "}
            {myAge()} y/o and im from Indonesia, i've been doing code since{" "}
            <span className={styles.highlight}> early 2020.</span> I used to
            code with <span className={styles.highlight}>front-end</span>, but i
            do <span className={styles.highlight}>back-end</span> also.
          </p>
          <p className={cn(styles.description, "mb-4")}>
            Graduated from vocational school with{" "}
            <span className={styles.highlight}>SE major</span>. as well with
            informal education at{" "}
            <a
              className={cn(
                styles.highlight,
                "underline underline-offset-4 hover:outline-dotted outline-1"
              )}
              href="https://dicoding.id"
            >
              Dicoding academy
            </a>
            , with several classes including{" "}
            <a
              className={cn(
                styles.highlight,
                "underline underline-offset-4 hover:outline-dotted outline-1"
              )}
              href="https://dicoding.com/certificates/4EXG93W9QZRL"
            >
              Front-end Expert Class
            </a>
            ,{" "}
            <a
              className={cn(
                styles.highlight,
                "underline underline-offset-4 hover:outline-dotted outline-1"
              )}
              href="https://dicoding.com/certificates/ERZRG9LEQPYV"
            >
              AWS practitioner
            </a>
            , and{" "}
            <a
              className={cn(
                styles.highlight,
                "underline underline-offset-4 hover:outline-dotted outline-1"
              )}
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
        <section className={cn(styles.list, "my-4  fill-zinc-400")}>
          {skill_list.map((skill) => (
            <Image
              key={skill}
              className="pointer-events-none"
              draggable="false"
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              title={`${skill} icon`}
              width={48}
              height={48}
              sizes="48px"
            />
          ))}
        </section>

        <section className="mt-16">
          <span className="inline-block text-lg mb-2">
            <span className="text-xl text-zinc-700">#</span> Projects
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.data.user.pinnedItems.nodes.map((repo) => (
              <ProjectCard
                key={repo.name}
                title={repo.name}
                description={repo.description}
                color={repo.primaryLanguage.color}
                url={repo.homepageUrl}
                star={repo.stargazerCount}
                fork={repo.forkCount}
              />
            ))}
          </div>
          <a
            className={cn(
              styles.highlight,
              "block underline underline-offset-4 hover:outline-dotted outline-1 my-4"
            )}
            href="https://github.com/kraken-afk"
          >
            more &rarr;
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN as string}`,
    },
    body: JSON.stringify({ query: pinnedReposQueryBuilder("kraken-afk") }),
  });
  const pinnedRepos = await response.json();

  return { props: { repos: pinnedRepos } };
}
